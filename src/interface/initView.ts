import { LoadRandomImage } from '../usecase/LoadRandomImage'
import { MapillaryService } from '../infrastructure/MapillaryService'

const service = new MapillaryService()
const usecase = new LoadRandomImage(service)

async function load() {
	await usecase.execute()
}

export function initView() {
	load()
}
