export const formatDate = (date: Date) => {
	const options = {
		weekday: "long",
		year: "numeric",
		month: "long",
		day: "numeric",
	} as const
	return date.toLocaleDateString("en-US", options)
}