import { DUMMY_ID, MAX_RETRY_COUNT } from '../const/config'
import { Viewer } from 'mapillary-js'
import { IMapillaryService } from '../domain/domain'

export class LoadRandomImage {
	constructor(private service: IMapillaryService) {}

	async execute(retries: number = MAX_RETRY_COUNT): Promise<Viewer | null> {
		const tryFetch = async (useDummy = false): Promise<Viewer | null> => {
			const dom = await this.service.fetchImage(useDummy ? DUMMY_ID : undefined)
			return dom
		}

		for (let i = 0; i < retries; i++) {
			const _useDummy = i === retries - 1 // 最後の試行だけ DUMMY を使う
			const result = await tryFetch(_useDummy)

			if (result) {
				console.log(`✅ 成功 [${i + 1}回目]`)
				return result
			} else {
				console.warn(`⚠️ 試行 ${i + 1}回目失敗`)
			}
		}

		return null
	}
}
