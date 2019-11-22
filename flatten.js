flatten = data => {
	let flats = []
	data.forEach(datum => {
		let temp = {}
		temp.id = datum.id
		flats.push(Object.assign({}, datum.fields, temp))
	})
	return flats
}
