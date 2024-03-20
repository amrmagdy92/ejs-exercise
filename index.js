const express = require("express")

const app = express()
const port = 3000

const parseDay = (dayNumber) => {
    switch (dayNumber) {
        case 0: return "Sunday"
        case 1: return "Monday"
        case 2: return "Tuesday"
        case 3: return "Wednesday"
        case 4: return "Thursday"
        case 5: return "Friday"
        case 6: return "Saturday"
    }
}

const getAdvice = (dayNumber) => {
    if (dayNumber < 5) return "we need to push harder."
    else if (dayNumber >= 5) return "we can enjoy our weekend."
}

const today = parseDay(new Date().getDay())
const todayAdvice = getAdvice(new Date().getDay())

const testData = {
    title: "EJS Tags",
    seconds: Date.now(),
    items: ["Apples", "Oranges", "Strawberry"],
    htmlContent: "<em>This is some em text<em>"
}

app.get('/', (req, res) => {
    res.render("index.ejs", {
        weekday: today,
        advice: todayAdvice,
        data: testData
    })
})


app.listen(port, () => {
    console.log(`App is now listening on prot ${port}`)
})