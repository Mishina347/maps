export enum RegionKey {
	TOKYO_EAST = 'TOKYO_EAST',
	TOKYO_WEST = 'TOKYO_WEST ',
	HOKKAIDO = 'HOKKAIDO',
	TOHOKU = 'TOHOKU',
	KANTO = 'KANTO',
	CHUBU = 'CHUBU',
	KINKI = 'KINKI',
	CHUGOKU = 'CHUGOKU',
	SHIKOKU = 'SHIKOKU',
	KYUSHU = 'KYUSHU',
}

export const RegionNames: Record<RegionKey, string> = {
	[RegionKey.TOKYO_EAST]: '東京（東側）',
	[RegionKey.TOKYO_WEST]: '東京（西側）',
	[RegionKey.HOKKAIDO]: '北海道',
	[RegionKey.TOHOKU]: '東北',
	[RegionKey.KANTO]: '関東',
	[RegionKey.CHUBU]: '中部',
	[RegionKey.KINKI]: '近畿',
	[RegionKey.CHUGOKU]: '中国',
	[RegionKey.SHIKOKU]: '四国',
	[RegionKey.KYUSHU]: '九州',
}

export const REGION_BOUNDS: Record<
	RegionKey,
	{ latMin: number; latMax: number; lngMin: number; lngMax: number }
> = {
	[RegionKey.TOKYO_EAST]: { latMin: 35.5, latMax: 35.8, lngMin: 139.6, lngMax: 139.9 },
	[RegionKey.TOKYO_WEST]: {
		latMin: 35.5,
		latMax: 35.8,
		lngMin: 139.2, // 奥多摩・青梅あたり
		lngMax: 139.7, // 新宿よりやや西
	},
	[RegionKey.HOKKAIDO]: { latMin: 41.3, latMax: 45.5, lngMin: 139.4, lngMax: 145.8 },
	[RegionKey.TOHOKU]: { latMin: 37.4, latMax: 41.5, lngMin: 139.4, lngMax: 141.9 },
	[RegionKey.KANTO]: { latMin: 35.2, latMax: 37.0, lngMin: 138.9, lngMax: 140.9 },
	[RegionKey.CHUBU]: { latMin: 35.0, latMax: 37.0, lngMin: 136.4, lngMax: 138.9 },
	[RegionKey.KINKI]: { latMin: 33.5, latMax: 35.7, lngMin: 134.3, lngMax: 136.9 },
	[RegionKey.CHUGOKU]: { latMin: 33.4, latMax: 35.0, lngMin: 131.5, lngMax: 134.3 },
	[RegionKey.SHIKOKU]: { latMin: 32.9, latMax: 34.8, lngMin: 132.0, lngMax: 134.3 },
	[RegionKey.KYUSHU]: { latMin: 30.9, latMax: 33.8, lngMin: 129.5, lngMax: 131.9 },
}

export const MAX_COUNTS = 100
export const MIN_COUNTS = 1
export const MAX_COLUMNS = 10
export const MIN_COLUMNS = 1
