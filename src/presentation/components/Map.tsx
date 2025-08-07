import React, { useState, useCallback } from 'react'
import { getRandomLatLng } from '../../application/usecases/useRandomLatLng'
import { useInView } from 'react-intersection-observer'

type Props = {
	refId: string
	mapId: number
}

export const Map: React.FC<Props> = ({ refId, mapId }) => {
	const [coords, setCoords] = useState(getRandomLatLng())
	const { ref, inView } = useInView({ triggerOnce: true })

	const refresh = useCallback(() => {
		setCoords(getRandomLatLng())
	}, [])

	const url = `https://www.google.com/maps?q=&layer=c&cbll=${coords.lat},${coords.lng}&cbp=11,0,0,0,0&output=svembed`
	return (
		<div
			ref={ref}
			style={{ width: '100%', height: '100%', position: 'relative', aspectRatio: '1 / 1' }}
			role="region"
		>
			{inView ? (
				<iframe
					src={url}
					title={`StreetView_${mapId}`}
					style={{ width: '100%', height: '100%', border: 0, borderRadius: 8 }}
					loading="lazy"
					allow="accelerometer; gyroscope; fullscreen"
				/>
			) : (
				<div style={{ width: '100%', height: '100%', background: '#eee' }} />
			)}
			<button
				aria-label={`ストリートビュー ${mapId} を再読み込み`}
				onClick={refresh}
				style={{
					position: 'absolute',
					bottom: 8,
					left: 8,
					background: '#ffffffcc',
					border: '1px solid #ccc',
					borderRadius: 4,
					padding: '4px 8px',
					cursor: 'pointer',
					fontSize: '1rem',
				}}
			>
				🔄 再検索
			</button>
		</div>
	)
}
