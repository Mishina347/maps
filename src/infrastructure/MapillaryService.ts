import { ACCESS_TOKEN } from '../const/config'
import { IMapillaryService } from '../domain/domain'
import { getSecureRandomBigInt } from '../util/ramdom'
import { RenderMode, Viewer, ViewerOptions } from 'mapillary-js'

// 外部関数: 指定 imageId の画像が存在するか確認
export async function checkIfImageExists(_imageId: string, _token: string): Promise<boolean> {
	const url = `https://graph.mapillary.com/${_imageId}?access_token=${_token}`

	try {
		const res = await fetch(url)
		return res.ok
	} catch (err) {
		console.warn(`⚠️ fetch失敗: ${err}`)
		return false
	}
}

export class MapillaryService implements IMapillaryService {
	async fetchImage(dummyId?: string): Promise<Viewer | null> {
		const imageId = dummyId ?? getSecureRandomBigInt()

		const isValid = await checkIfImageExists(imageId, ACCESS_TOKEN)
		if (!isValid) {
			console.warn(`❌ 無効な imageId: ${imageId}`)
			return null
		}

		try {
			const options: ViewerOptions = {
				accessToken: ACCESS_TOKEN,
				container: 'mapillary-frame',
				imageId,
			}

			return new Viewer(options)
		} catch (error) {
			return null
		}
	}
}
