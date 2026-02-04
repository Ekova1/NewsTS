interface PaginationProps {
	currentPage: number
	totalPages: number
	handlePageNext: (currenPage: number) => void;
	handlePagePrev: (currentPage: number) => void
	handlePageClick: (page: number) => void
}

export const Pagination = ({ currentPage = 1, totalPages = 10, handlePageNext, handlePagePrev, handlePageClick }: PaginationProps) => {
	return (
		<div className="flex justify-center items-center">
			<button disabled={currentPage <= 1} className="cursor-pointer p-3 disabled:cursor-default disabled:text-gray-500" onClick={() => handlePagePrev(currentPage)}>◀</button>
			{[...Array(totalPages)].map((_, index) => (
				<button
					key={index}
					disabled={currentPage === index + 1}
					className="cursor-pointer p-3 disabled:cursor-default disabled:text-gray-500"
					onClick={() => handlePageClick(index + 1)}
				>
					{index + 1}
				</button>
			))}
			<button disabled={currentPage >= totalPages} className="cursor-pointer p-3 disabled:cursor-default disabled:text-gray-500" onClick={() => handlePageNext(currentPage)}>▶</button>
		</div>
	)
}