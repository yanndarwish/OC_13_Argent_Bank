export const formatAmount = (num) => {
	let formattedNum

	function addCommas(num) {
		var parts = num.toString().split(".")
		parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",")
		return parts.join(".")
	}

	const addZeroes = (num) => {
		num = num.toString()
		const dec = num.split(".")[1]
		const len = dec && dec.length > 2 ? dec.length : 2
		return Number(num).toFixed(len)
	}

	formattedNum = addCommas(addZeroes(num))

	return formattedNum
}
