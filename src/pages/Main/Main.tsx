import { useEffect, useState } from "react"
import { NewsBanner } from "../../components/NewsBanner/NewsBanner"
import { getNews } from "../../api/apiNews"
import { NewsList } from "../../components/NewsList/NewsList"

export const Main = () => {
	const [news, setNews] = useState([])
	useEffect(() => {
		const fetchNews = async () => {
			try {
				const response = await getNews()
				setNews(response.news)
			} catch (error) {
				console.log(error)
			}
		}
		fetchNews()
	}, [])

	return (
		<main className="flex flex-col w-full gap-8">
			{news.length > 0 ? <NewsBanner item={news[16]} /> : null}
			<NewsList news={news} />
		</main>
	)
}