import { Viewer } from 'mapillary-js'

export interface IMapillaryService {
	fetchImage(dummyId?: string): Promise<Viewer | null>
}
