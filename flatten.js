/*
	Function takes array returned by Airtable as data and returns an array as flats
*/

flatten = data => {
	let flats = []
	data.forEach(datum => {
		let temp = {}
		temp.id = datum.id
		flats.push(Object.assign({}, datum.fields, temp))
	})
	return flats
}
