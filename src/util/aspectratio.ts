export const gcd = (a: number, b: number): number => {
	return b
		? gcd(b, a % b)
		: a;
};

const getAspectRatio = (width: number, height: number): string => {
	const divisor = gcd(width, height)

	return `${width / divisor}:${height / divisor}`
}

export default getAspectRatio