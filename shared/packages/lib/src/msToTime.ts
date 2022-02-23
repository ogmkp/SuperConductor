export const parseMs = (duration: number) => {
	// const hours: number = Math.floor((duration / (1000 * 60 * 60)) % 24)
	const secondTenths: number = Math.floor((duration % 1000) / 100)
	const seconds: number = Math.floor((duration / 1000) % 60)
	const minutes: number = Math.floor((duration / (1000 * 60)) % 60)
	return { minutes, seconds, secondTenths }
}

export const msToTime = (duration: number) => {
	const result = parseMs(duration)
	const secondTenths = result.secondTenths

	// hours = hours < 10 ? '0' + hours : hours
	const minutes = result.minutes.toString().padStart(2, '0')
	const seconds = result.seconds.toString().padStart(2, '0')

	// return hours + ':' + minutes + ':' + seconds + '.' + milliseconds
	return minutes + ':' + seconds + '.' + secondTenths
}
