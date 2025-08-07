import React, { useCallback, useMemo, useState } from 'react'

// ランダム座標を取得（東京近辺）
function getRandomLatLng(): { lat: number; lng: number } {
	const latMin = 35.5
	const latMax = 35.8
	const lngMin = 139.6
	const lngMax = 139.9
	const lat = Math.random() * (latMax - latMin) + latMin
	const lng = Math.random() * (lngMax - lngMin) + lngMin
	return { lat, lng }
}

function Map() {
	const [coords, setCoords] = useState(getRandomLatLng())

	const refresh = useCallback(() => {
		setCoords(getRandomLatLng())
	}, [])

	const url = useMemo(
		() =>
			`https://www.google.com/maps?q=&layer=c&cbll=${coords.lat},${coords.lng}&cbp=11,0,0,0,0&output=svembed`,
		[coords.lat, coords.lng]
	)

	return (
		<div
			style={{
				width: '90%',
				height: '90%',
				margin: 'auto',
				position: 'relative',
				borderRadius: 8,
				overflow: 'hidden',
			}}
		>
			<iframe
				src={url}
				title={`StreetView_${coords.lat}_${coords.lng}`}
				style={{ width: '98%', height: '98%', border: 'none', margin: 'auto' }}
				allowFullScreen
				loading="lazy"
			/>
			<button
				onClick={refresh}
				style={{
					position: 'absolute',
					bottom: 12,
					left: 8,
					background: '#ffffffcc',
					border: '1px solid #ccc',
					borderRadius: 4,
					padding: '4px',
					cursor: 'pointer',
					fontSize: 12,
				}}
			>
				🔄 再検索
			</button>
		</div>
	)
}

interface AppProps {
	count?: number
	columns?: number
}

export default function App({ count = 6, columns = 3 }: AppProps) {
	const mapsArray = Array.from({ length: count })

	return (
		<div
			style={{
				display: 'grid',
				gridTemplateColumns: `repeat(${columns}, 1fr)`,
				gap: '1rem',
				margin: '1rem',
				padding: '1rem',
				height: '100vh',
				boxSizing: 'border-box',
				overflow: 'auto',
			}}
		>
			{mapsArray.map((_, i) => (
				<div key={i} style={{ aspectRatio: '1 / 1', minHeight: 0 }}>
					<Map />
				</div>
			))}
		</div>
	)
}
