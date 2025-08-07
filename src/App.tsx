import React, { useState } from 'react'

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

	const refresh = () => {
		setCoords(getRandomLatLng())
	}

	const url = `https://www.google.com/maps?q=&layer=c&cbll=${coords.lat},${coords.lng}&cbp=11,0,0,0,0&output=svembed`

	return (
		<div
			style={{
				width: '99%',
				height: '99%',
				position: 'relative',
				borderRadius: 8,
				overflow: 'hidden',
			}}
		>
			<iframe
				src={url}
				title={`StreetView_${coords.lat}_${coords.lng}`}
				style={{ width: '100%', height: '100%', border: 'none' }}
				allowFullScreen
				loading="lazy"
			/>
			<button
				onClick={refresh}
				style={{
					position: 'absolute',
					top: 8,
					right: 8,
					background: '#ffffffcc',
					border: '1px solid #ccc',
					borderRadius: 4,
					padding: '4px 8px',
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
