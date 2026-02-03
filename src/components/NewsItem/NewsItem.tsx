import { formatTimeAgo } from '../../helpers/formatTimeAgo'
import type { INewsItem } from '../../types/component.types'

interface NewsItemProps {
	item: INewsItem
}

export const NewsItem = ({ item }: NewsItemProps) => {
	return (
		<li className='flex w-full gap-3'>
			<div className="w-16 h-16 bg-gray-200 bg-center bg-cover shrink-0" style={{ backgroundImage: `url(${item?.image})` }}></div>
			<div className="flex flex-col gap-2">
				<h3 className='text-s'>{item?.title}</h3>
				<p className='text-xs text-gray-600'>
					{`${formatTimeAgo(item?.published)} by ${item?.author}`}
				</p>
			</div>
		</li>
	)
}