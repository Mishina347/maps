import React, { useState, useCallback, useMemo, useRef } from 'react'
import { Map } from '../components/Map'

const Home: React.FC = () => {
	const [columns, setColumns] = useState(3)
	const [count, setCount] = useState(6)

	// MapのIDリストを保持（永続的に）
	const mapIdsRef = useRef<string[]>([])

	// 必要数だけIDがあるかチェックして、不足分を追加
	const ensureIds = useCallback((newCount: number) => {
		const current = mapIdsRef.current.length
		if (current < newCount) {
			const additional = Array.from({ length: newCount - current }, () => crypto.randomUUID())
			mapIdsRef.current = [...mapIdsRef.current, ...additional]
		} else if (current > newCount) {
			mapIdsRef.current = mapIdsRef.current.slice(0, newCount)
		}
	}, [])

	// 必ず初期化
	ensureIds(count)

	const normalizeCount = (value: number, current: number, columns: number): number => {
		if (columns <= 0) return value
		if (value > current) {
			// 増加 → 切り上げ
			return Math.ceil(value / columns) * columns
		} else {
			// 減少 → 切り捨て（ただし最低 1 行分は表示）
			return Math.max(columns, Math.floor(value / columns) * columns)
		}
	}

	const handleCountChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const value = parseInt(e.target.value)
			if (!isNaN(value) && value > 0) {
				const newCount = normalizeCount(value, count, columns)
				ensureIds(newCount)
				setCount(newCount)
			}
		},
		[count, columns, ensureIds]
	)

	const handleColumnsChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement>) => {
			const value = parseInt(e.target.value)
			if (!isNaN(value) && value > 0) {
				const newCount = Math.ceil(count / value) * value
				ensureIds(newCount)
				setColumns(value)
				setCount(newCount)
			}
		},
		[count, ensureIds]
	)

	return (
		<div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
			<section
				aria-labelledby="grid-settings"
				style={{
					padding: '8px 16px',
					background: '#f4f4f4',
					display: 'flex',
					gap: '16px',
					alignItems: 'center',
				}}
			>
				<h2 id="grid-settings" style={{ margin: 0, fontSize: '1rem' }}>
					表示設定
				</h2>
				<fieldset>
					<legend>表示数（1〜100）</legend>

					<input
						type="number"
						value={count}
						onChange={handleCountChange}
						min={1}
						max={100}
						aria-labelledby="grid-settings count"
						style={{ width: 60 }}
					/>
				</fieldset>
				<fieldset>
					<legend>列数（1〜10）</legend>
					<input
						type="number"
						value={columns}
						onChange={handleColumnsChange}
						min={1}
						max={10}
						aria-labelledby="grid-settings columns"
						style={{ width: 60 }}
					/>
				</fieldset>
			</section>
			<section
				aria-label="ストリートビュー一覧"
				style={{
					display: 'grid',
					gridTemplateColumns: `repeat(${columns}, 1fr)`,
					gap: '16px',
					padding: '16px',
					flexGrow: 1,
					overflow: 'auto',
				}}
			>
				{mapIdsRef.current.slice(0, count).map((id, i) => (
					<Map key={id} refId={id} mapId={i} />
				))}
			</section>
		</div>
	)
}

export default Home
