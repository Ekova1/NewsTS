import { useEffect, useState } from "react"
import { NewsBanner } from "../../components/NewsBanner/NewsBanner"
import { getNews } from "../../api/apiNews"
import { NewsList } from "../../components/NewsList/NewsList"
import { Skeleton } from "../../components/Skeleton/Skeleton"
import { Pagination } from "../../components/Pagination/Pagination"

export const Main = () => {
	const [news, setNews] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [currentPage, setCurrentPage] = useState(1)
	const totalPages = 10
	const pageSize = 10

	const handlePageNext = (currentPage: number) => {
		if (currentPage >= 1) setCurrentPage(currentPage + 1)
	}
	const handlePagePrev = (currentPage: number) => {
		if (currentPage <= totalPages) setCurrentPage(currentPage - 1)
	}
	const handlePageClick = (page: number) => setCurrentPage(page)

	const fetchNews = async (currentPage: number) => {
		try {
			setIsLoading(true)
			const response = await getNews(currentPage, pageSize)
			setNews(response.news)
			setIsLoading(false)
		} catch (error) {
			console.log(error)
		}
	}

	useEffect(() => {
		(async () => {
			await fetchNews(currentPage);
		})();
	}, [currentPage])

	return (
		<main className="flex flex-col w-full gap-8">
			{news?.length > 0 && !isLoading ? (
				<NewsBanner item={news[0]} />
			) : (
				<Skeleton count={1} type="banner" />
			)}

			<Pagination currentPage={currentPage} totalPages={totalPages} handlePageNext={handlePageNext} handlePagePrev={handlePagePrev} handlePageClick={handlePageClick} />

			{news?.length > 0 && !isLoading ? (
				<NewsList news={news} />
			) : (
				<Skeleton count={10} type="list" />
			)}
		</main>
	)
}