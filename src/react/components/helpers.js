export const TYPES = {
	DEFAULT: 'default',
	URL: 'url',
	ADDRESS: 'address',
}

export const load = async({ url, method = 'POST', body }) => {
	const options = { method, headers: { 'Content-Type': 'application/json' } }
	if (body) options.body = JSON.stringify(body)

	const response = await fetch(url, options)
	return await response.json()
}
