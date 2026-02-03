import type { INewsItem } from "../../types/component.types"
import { NewsItem } from "../NewsItem/NewsItem"

export interface NewsListProps {
	news: INewsItem[]
}

export const NewsList = ({ news }: NewsListProps) => {
	return (
		<ul className="w-full flex flex-col gap-6">
			{news.map((item) => {
				return <NewsItem key={item.id} item={item} />
			})}
		</ul>
	)
}