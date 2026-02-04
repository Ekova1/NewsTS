import axios from "axios"

const API_KEY = import.meta.env.VITE_NEWS_API_KEY
// const BASE_URL = "1"
const BASE_URL = import.meta.env.VITE_NEWS_BASE_API_URL

export const getNews = async (page_number: number, page_size: number = 10) => {
	try {
		const response = await axios.get(`${BASE_URL}search?language=ru`, {
			params: {
				apiKey: API_KEY,
				page_number,
				page_size
			}
		})
		return response.data
	} catch (error) {
		console.log(error)
	}
}