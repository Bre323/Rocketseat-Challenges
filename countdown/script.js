let countdownDate = new Date("Jan 1, 2024 00:00:00").getTime()

function updateTime() {
    let now = new Date().getTime()
    let timeLeft = countdownDate - now

    // Calculo do tempo em dias, horas, minutos e segundos
    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24))
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60))
    let seconds = Math.floor(timeLeft % (1000 * 60) / 1000)


    console.log(document.getElementById("days-value"))

    days > 9 ? document.getElementById("days-value").innerHTML = days
             : document.getElementById("days-value").innerHTML = "0" + days

    hours > 9 ? document.getElementById("hours-value").innerHTML = hours
              : document.getElementById("hours-value").innerHTML = "0" + hours

    minutes > 9 ? document.getElementById("minutes-value").innerHTML = minutes
                : document.getElementById("minutes-value").innerHTML = "0" + minutes

    seconds > 9 ? document.getElementById("seconds-value").innerHTML = seconds
                : document.getElementById("seconds-value").innerHTML = "0" + seconds
}

window.onload = setInterval(updateTime, 1000)
