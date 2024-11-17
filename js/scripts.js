// Задание №1

const firstName ="Амандык"
const lastName = "Тулебаев"
const age = 30 
const logMessage = `Меня зовут ${firstName} ${lastName}, и мне ${age} лет`
console.log(logMessage)

// Задание №2

const city = "Атырау"
console.log("Я родом из города " + city)

// Задание №3

const password = "123456789Password"
const hasAccess = true
console.log(password, hasAccess)

// Задание №4

const isMember = false
const isString = "" + isMember
console.log(isString, typeof isString)

// Задание №5

const cartItems = 0
const isCartEmpty = false
console.log(cartItems, isCartEmpty)

// Задание №6

let averageScore = 89.75695
averageScore = Number(averageScore.toFixed(1))
console.log(averageScore)

// Задание №7

const greetingMessage = "      Приветствуем вас в мире программирования!        "
const trimMessage = greetingMessage.trim()
const upperMessage = trimMessage.toLocaleUpperCase()
const includesMessage = trimMessage.includes()
console.log(greetingMessage)
console.log(trimMessage)
console.log(upperMessage)
console.log(includesMessage)