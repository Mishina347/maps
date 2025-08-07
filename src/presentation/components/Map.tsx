import React, { useState, useCallback } from 'react'
import { getRandomLatLng } from '../../application/usecases/useRandomLatLng'

const Map: React.FC = () => {
	const [coords, setCoords] = useState(getRandomLatLng())

	const refresh = useCallback(() => {
		setCoords(getRandomLatLng())
	}, [])

	const url = `https://www.google.com/maps?q=&layer=c&cbll=${coords.lat},${coords.lng}&cbp=11,0,0,0,0&output=svembed`

	return (
		<div style={{ width: '100%', height: '100%', position: 'relative' }}>
			<iframe
				loading="lazy"
				sandbox="allow-scripts allow-same-origin"
				src={url}
				title={`StreetView_${coords.lat}_${coords.lng}`}
				style={{ width: '100%', height: '100%', border: 0, borderRadius: 8 }}
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

export default React.memo(Map)
