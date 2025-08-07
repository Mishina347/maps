interface ImportMetaEnv {
	readonly VITE_MAPILLARY_ACCESS_TOKEN: string
	readonly VITE_GOOGLE_MAP_ACCESS_TOKEN: string
}

interface ImportMeta {
	readonly env: ImportMetaEnv
}
