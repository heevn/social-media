import axios from 'axios'

const $host = axios.create({
	baseURL: process.env.API_URL,
	headers: { 'X-Custom-Header': 'foobar' },
})

const $authHost = axios.create({
	baseURL: process.env.API_URL,
})

$authHost.interceptors.request.use(
	config => {
		config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`
		return config
	},
	error => {
		return Promise.reject(error)
	}
)

export { $authHost, $host }
