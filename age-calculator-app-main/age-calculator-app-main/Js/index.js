document.getElementById("iconBtn").addEventListener('click', function () { checkInputs("DAY", "MONTH", "YEAR") })


const checkInputs = (day, month, year) => {

    const commonDays = /[0-9]|1[0-9]|2[0-8]/
    const dayRegex30 = `${commonDays}|29|30`
    const dayRegex31 = `${dayRegex30}|31`

    const dayInput = document.getElementById(day)
    const monthInput = document.getElementById(month)
    const yearInput = document.getElementById(year)

    const dayValue = dayInput.value
    const monthValue = monthInput.value
    const yearValue = yearInput.value

    console.log(dayValue);
    console.log(monthValue);
    console.log(yearValue);

    checkInputsProcess(dayValue, monthValue, yearValue)

}

const isLeapYear = year => {
    const yearValue = parseInt(year)
    if (isNaN(yearValue) || yearValue < 1900 || yearValue > 2100) return "invalid year"
    return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)

    // if (year >= new Date().getFullYear || year === null || year === "") {
    //     return "invalid year"
    // } else {
    //     return ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)
    // }

}


const checkInputsProcess = (days, month, year) => {

    const yearValue = parseInt(year)
    const daysValue = parseInt(days)

    if (isNaN(yearValue) || isNaN(daysValue)) {
        return "invalid Input"
    }

    const monthsWith30Days = month == "04" || month == "06" || month == "09" || month == "11"
    const monthsWith31Days = month == "01" || month == "05" || month == "07" || month == "08" || month == "10" || month == "12"

    if (monthsWith30Days) {
        if (days.value <= '30') {
            console.log(days);
            return "Good value in the days input ."
        } else {
            return "Wrong value in the days input ."
        }
    } else if (monthsWith31Days) {
        if (days.value <= '31') {
            console.log(days);
            return "Good value in the days input ."
        } else {
            return "Wrong value in the days input ."
        }
    } else if (month == '2') {
        if (isLeapYear(year)) {
            console.log(year);
            if (days.value <= "29") {
                console.log(days);
                return "Good value in the days input ."
            }
            else {
                console.log(days);
                return "Wrong value in the days input ."
            }
        } else {
            if (days.value <= "28") {
                console.log(days);
                return "Good value in the days input ."
            }
            else {
                console.log(days);
                return "Wrong value in the days input ."
            }
        }
    } else {
        return "Wrong value in the month input ."
    }
}
