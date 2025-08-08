import React, { createContext, useState, ReactNode } from 'react'
import { RegionKey } from '../constants/mapConfig'

interface RegionContextType {
	region: RegionKey
	setRegion: (region: RegionKey) => void
}

export const RegionContext = createContext<RegionContextType>({
	region: RegionKey.TOKYO,
	setRegion: () => {},
})

export const RegionProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
	const [region, setRegion] = useState<RegionKey>(RegionKey.TOKYO)

	return <RegionContext.Provider value={{ region, setRegion }}>{children}</RegionContext.Provider>
}
