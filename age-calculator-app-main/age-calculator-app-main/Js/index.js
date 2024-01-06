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

    if (isLeapYear(yearValue)) {

    }
}

const isLeapYear = year => ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0)



const checkDays = () => {

}

const checkMonths = () => {

}
