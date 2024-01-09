document.getElementById("iconBtn").addEventListener('click', function () { checkInputs("DAY", "MONTH", "YEAR") })


const checkInputs = (day, month, year) => {

    // const commonDays = /[0-9]|1[0-9]|2[0-8]/
    // const dayRegex30 = `${commonDays}|29|30`
    // const dayRegex31 = `${dayRegex30}|31`

    const dayInput = document.getElementById(day)
    const monthInput = document.getElementById(month)
    const yearInput = document.getElementById(year)

    const dayValue = parseInt(dayInput.value)
    const monthValue = parseInt(monthInput.value)
    const yearValue = parseInt(yearInput.value)

    // console.log(dayValue);
    // console.log(monthValue);
    // console.log(yearValue);

    const validatingResults = checkInputsProcess(dayValue, monthValue, yearValue)
    console.log(validatingResults)

}

const isLeapYear = year => {
    const currentYear = new Date().getFullYear();
    console.log("Current Year : " + currentYear)
    // const yearValue = parseInt(year)
    if (year >= currentYear || isNaN(year) || year === null || year === "") {
        return "Invalid Year"
    }
    console.log(year)
    return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
}


const checkInputsProcess = (days, month, year) => {

    // const yearValue = parseInt(year)
    // const daysValue = parseInt(days)

    // if (isNaN(yearValue) || isNaN(daysValue)) {
    //     return "invalid Input"
    // }

    const monthsWith30Days = month == "04" || month == "06" || month == "09" || month == "11"
    const monthsWith31Days = month == "01" || month == "05" || month == "07" || month == "08" || month == "10" || month == "12"

    // if (monthsWith30Days && daysValue <= 30) return true
    // else if (monthsWith31Days && daysValue <= 31) return true
    // else if (month == '2') {
    //     if (isLeapYear(year)) return daysValue <= 29
    //     else return daysValue <= 28
    // } else return "Wrong value in the month input ."

    if (monthsWith30Days && days <= 30) {
        console.log(days);
        console.log(month);
        return "Good value in the days input.";
    } else if (monthsWith31Days && days <= 31) {
        console.log(days);
        console.log(month);
        return "Good value in the days input.";
    } else if (month === 2) {
        if (isLeapYear(year)) {
            if (days <= 29) {
                console.log(days);
                console.log(month);
                return "Good value in the days input.";
            } else {
                console.log(days);
                console.log(month);
                return "Wrong value in the days input.";
            }
        } else {
            if (days <= 28) {
                console.log(days);
                console.log(month);
                return "Good value in the days input.";
            } else {
                console.log(days);
                console.log(month);
                return "Wrong value in the days input.";
            }
        }
    } else {
        return "Wrong value in the day or month or year input.";
    }

}
