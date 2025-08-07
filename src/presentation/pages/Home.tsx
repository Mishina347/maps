import React, { useState, useCallback, useMemo } from 'react'
import Map from '../components/Map'

const Home: React.FC = () => {
	const [columns, setColumns] = useState(3)
	const [count, setCount] = useState(6)

	// countをcolumnsの倍数に丸める関数
	const normalizeCount = useCallback((value: number, cols: number) => {
		if (cols <= 0) return value
		return Math.ceil(value / cols) * cols
	}, [])

	const normalizeCountDownSafe = useCallback(
		(value: number, cols: number): number => {
			if (cols <= 0) return value
			const floored = Math.floor(value / cols) * cols
			return floored > 0 ? floored : cols // 最低1行分は出す
		},
		[count]
	)

	const handleCountChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const value = parseInt(e.target.value)
			if (!isNaN(value) && value > 0) {
				const newCount = normalizeCountDownSafe(value, columns)
				setCount(newCount)
			}
		},
		[columns]
	)

	const handleColumnsChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const value = parseInt(e.target.value)
			if (!isNaN(value) && value > 0) {
				setColumns(value)
				setCount(prevCount => normalizeCount(prevCount, value))
			}
		},
		[normalizeCount]
	)

	const mapsArray = useMemo(() => Array.from({ length: count }), [count])

	return (
		<div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
			<div style={{ padding: '8px 16px', background: '#f4f4f4', display: 'flex', gap: '16px' }}>
				<label>
					表示数:
					<input
						type="number"
						value={count}
						onChange={handleCountChange}
						min={1}
						style={{ width: 60 }}
					/>
				</label>
				<label>
					列数:
					<input
						type="number"
						value={columns}
						onChange={handleColumnsChange}
						min={1}
						style={{ width: 60 }}
					/>
				</label>
			</div>

			<div
				style={{
					display: 'grid',
					gridTemplateColumns: `repeat(${columns}, 1fr)`,
					gap: '16px',
					padding: '16px',
					flexGrow: 1,
					overflow: 'auto',
				}}
			>
				{mapsArray.map((_, i) => (
					<div key={i} style={{ aspectRatio: '1 / 1' }}>
						<Map />
					</div>
				))}
			</div>
		</div>
	)
}

export default Home
