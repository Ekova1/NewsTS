import { formatTimeAgo } from '../../helpers/formatTimeAgo'
import type { INewsItem } from '../../types/component.types'
import { Image } from '../Image/Image'

interface NewsBannerProps {
	item: INewsItem
}

export const NewsBanner = ({ item }: NewsBannerProps) => {
	return (
		<>
			<div className="flex flex-col w-full gap-3">
				<Image image={item?.image} />
				<h3 className='text-base'>{item?.title}</h3>
				<p className='text-xs text-gray-600'>
					{`${formatTimeAgo(item?.published)} by ${item?.author}`}
				</p>
			</div>
		</>
	)
}