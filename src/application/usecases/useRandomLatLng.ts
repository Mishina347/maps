import { REGION_BOUNDS, RegionKey } from '../../constants/mapConfig'

export function getRandomLatLng(region: RegionKey) {
	const bounds = REGION_BOUNDS[region]
	const lat = Math.random() * (bounds.latMax - bounds.latMin) + bounds.latMin
	const lng = Math.random() * (bounds.lngMax - bounds.lngMin) + bounds.lngMin
	return { lat, lng }
}
