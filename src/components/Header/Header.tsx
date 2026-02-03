import { formatDate } from "../../helpers/formatDate"

export const Header = () => {
	return (
		<header className="flex flex-col gap-3 w-full px-5 py-3 bg-white border-b-1 border-gray-200">
			<h1 className="text-3xl font-medium">NewsTS</h1>
			<p className="text-base">{formatDate(new Date())}</p>
		</header>
	)
}