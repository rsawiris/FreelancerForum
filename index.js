const name = ["Alice", "Bob", "Carol"]
const occupation = ["Writer", "Teacher", "Programmer"]
const price = [30, 50, 70]

function randomFreeLancer() {
    const nameNum = Math.floor(Math.random() * name.length)
    const occupationNum = Math.floor(Math.random() * occupation.length)
    const priceNum = Math.floor(Math.random() * price.length)

    const freeLancer = {
        name: name[nameNum],
        occupation: occupation[occupationNum],
        price: price[priceNum],
    }

    return freeLancer
}

randomFreeLancerOne = randomFreeLancer()
randomFreeLancerTwo = randomFreeLancer()
console.log(randomFreeLancerOne)
console.log(randomFreeLancerTwo)

const freeLancers = [randomFreeLancerOne, randomFreeLancerTwo]
const container = document.querySelector(".container")
function render() {
    const html = freeLancers.map((freeLancer) => {
        return `<div><ul><li>${freeLancer.name}, ${freeLancer.occupation}, $${freeLancer.price}</li></ul></div>`
    })
    container.innerHTML = html.join("")
    console.log(container)
}

render()

const interval = setInterval(() => {
    const obj = randomFreeLancer()
    freeLancers.push(obj)
    render()
    if(freeLancers.length === 10){
        clearInterval(interval)
    }
}, 1000)





