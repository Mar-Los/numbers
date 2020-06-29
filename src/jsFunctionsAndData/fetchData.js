
export default async function fetchData(type, number, secondNumber = '', options = '', tryNumber = 1) {
    if (secondNumber != '') {
        number += '/'
    }
    let response = ''
    let data
    try {
        response = await fetch(`https://numbersapi.p.rapidapi.com/${number}${secondNumber}/${type}?fragment=true&json=true${options}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "numbersapi.p.rapidapi.com",
                "x-rapidapi-key": process.env.REACT_APP_RAPID_API_KEY
            }
        })
        data = await response.json()
    } catch (err) {
        if (tryNumber == 10) throw err
        return await fetchData(type, number, secondNumber, options, tryNumber + 1)
    }

    return data
}