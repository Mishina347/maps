import React, { useContext } from 'react'
import { RegionKey, RegionNames } from '../../constants/mapConfig'
import { RegionContext } from '../../interface/regionContext'

export const RegionSelector: React.FC = () => {
	const selectId = 'region-selector'
	const { region, setRegion } = useContext(RegionContext)

	return (
		<>
			<label
				htmlFor={selectId}
				style={{ width: '1px', height: '1px', position: 'absolute', visibility: 'hidden' }}
			>
				表示する地域を選択
			</label>
			<select
				id={selectId}
				value={region}
				aria-label="表示する地域を選択"
				style={{ width: '6rem', height: '32px' }}
				onChange={e => setRegion(e.target.value as RegionKey)}
			>
				{Object.entries(RegionNames).map(([key, name]) => (
					<option key={key} value={key}>
						{name}
					</option>
				))}
			</select>
		</>
	)
}
