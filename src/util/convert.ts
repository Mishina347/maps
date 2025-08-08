import { RegionKey, RegionNames } from '../constants/mapConfig'

export function getRegionJapaneseName(key: RegionKey): string {
	return RegionNames[key] ?? ''
}
