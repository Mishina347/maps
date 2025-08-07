import { LatLng } from '../../domain/entities/LatLng'
import { TOKYO_BOUNDS } from '../../constants/mapConfig'

export function getRandomLatLng(): LatLng {
	const lat = Math.random() * (TOKYO_BOUNDS.latMax - TOKYO_BOUNDS.latMin) + TOKYO_BOUNDS.latMin
	const lng = Math.random() * (TOKYO_BOUNDS.lngMax - TOKYO_BOUNDS.lngMin) + TOKYO_BOUNDS.lngMin
	return { lat, lng }
}
