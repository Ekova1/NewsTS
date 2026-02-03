import clsx from "clsx"

interface ISkeletoneProps {
	count: number
	type: 'banner' | 'list'
}

export const Skeleton = ({ count = 1, type = "banner" }: ISkeletoneProps) => {

	return (
		<>
			{count > 1 ? (
				<ul className="flex flex-col gap-3">
					{[...Array(count)].map((_, index) => (
						<li
							className={
								clsx(
									type === "banner" ? "w-full pt-[100%] relative" : "w-full h-20",
									"animate-pulse bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100"
								)}
							key={index} />
					))}
				</ul>
			) : (
				<li className={
					clsx(
						type === "banner" ? "w-full pt-[100%] relative" : "w-full h-20",
						"animate-pulse bg-gradient-to-r from-gray-100 via-gray-200 to-gray-100"
					)} />
			)}
		</>
	)
}