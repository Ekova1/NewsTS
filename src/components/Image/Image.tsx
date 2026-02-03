interface ImageProps {
	image?: string
}

export const Image = ({ image }: ImageProps) => {
	return (
		<div className="w-full h-auto relative pt-[80%] bg-gray-200">
			{image ? <img src={image} alt="news" className="absolute top-0 left-0 w-full h-full object-cover" /> : null}
		</div>
	)
}