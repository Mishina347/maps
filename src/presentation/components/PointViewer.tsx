import React from 'react'
import { useContext, useMemo } from 'react'
import { REGION_BOUNDS } from '../../constants/mapConfig'
import { RegionContext } from '../../interface/regionContext'
import { getRegionJapaneseName } from '../../util/convert'

export const PointViewer: React.FC = () => {
	const { region } = useContext(RegionContext)
	const bounds = useMemo(() => REGION_BOUNDS[region], [region])
	const currentAreaName = useMemo(() => getRegionJapaneseName(region), [region])

	return (
		<div style={{ display: 'flex', alignItems: 'center' }}>
			<label>現在の地域: {currentAreaName}</label>
			<div style={{ display: 'flex', margin: '0.6rem' }}>
				<div style={{ display: 'flex', alignItems: 'center', margin: '0.6rem' }}>
					<p style={{ margin: '0.6rem' }}>緯度:</p>
					<section>
						<pre aria-label={`最低緯度${bounds.latMin}`}>最低: {bounds.latMin}</pre>
						<pre aria-label={`最高経度${bounds.latMin}`}>最高: {bounds.latMax}</pre>
					</section>
				</div>
				<div style={{ display: 'flex', alignItems: 'center', margin: '0.6rem' }}>
					<p style={{ margin: '0.6rem' }}>経度:</p>
					<section>
						<pre aria-label={`最低経度${bounds.lngMin}`}>最低: {bounds.lngMin}</pre>
						<pre aria-label={`最高経度${bounds.latMin}`}>最高: {bounds.lngMax}</pre>
					</section>
				</div>
			</div>
		</div>
	)
}
