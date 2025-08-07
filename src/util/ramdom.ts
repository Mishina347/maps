export function getSecureRandomBigInt(): string {
	let id = ''
	for (let i = 0; i < 16; i++) {
		id += Math.floor(Math.random() * 10)
	}
	return id
}
