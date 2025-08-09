import React, { useContext, useMemo } from 'react'
import { REGION_BOUNDS } from '../../constants/mapConfig'
import { RegionContext } from '../../interface/regionContext'
import { getRegionJapaneseName } from '../../util/convert'

export const PointViewer: React.FC = () => {
	const { region } = useContext(RegionContext)
	const bounds = useMemo(() => REGION_BOUNDS[region], [region])
	const currentAreaName = useMemo(() => getRegionJapaneseName(region), [region])

	return (
		<section
			aria-labelledby="region-info-title"
			style={{ display: 'flex', alignItems: 'center', fontSize: '1rem' }}
		>
			<h2 aria-live="polite">現在の地域: {currentAreaName}</h2>

			<table
				role="table"
				aria-label={`${currentAreaName} の緯度と経度の範囲`}
				style={{ borderCollapse: 'collapse', margin: '0.4rem' }}
			>
				<thead>
					<tr>
						<th scope="col" style={{ border: '1px solid #ccc', padding: '0.5rem' }}>
							緯度(最低)
						</th>
						<th scope="col" style={{ border: '1px solid #ccc', padding: '0.5rem' }}>
							緯度(最高)
						</th>
						<th scope="col" style={{ border: '1px solid #ccc', padding: '0.5rem' }}>
							経度(最低)
						</th>
						<th scope="col" style={{ border: '1px solid #ccc', padding: '0.5rem' }}>
							経度(最高)
						</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td
							style={{ border: '1px solid #ccc', padding: '0.5rem' }}
							aria-label={`最低緯度 ${bounds.latMin}`}
						>
							{bounds.latMin}
						</td>
						<td
							style={{ border: '1px solid #ccc', padding: '0.5rem' }}
							aria-label={`最高緯度 ${bounds.latMax}`}
						>
							{bounds.latMax}
						</td>
						<td
							style={{ border: '1px solid #ccc', padding: '0.5rem' }}
							aria-label={`最低経度 ${bounds.lngMin}`}
						>
							{bounds.lngMin}
						</td>
						<td
							style={{ border: '1px solid #ccc', padding: '0.5rem' }}
							aria-label={`最高経度 ${bounds.lngMax}`}
						>
							{bounds.lngMax}
						</td>
					</tr>
				</tbody>
			</table>
		</section>
	)
}
