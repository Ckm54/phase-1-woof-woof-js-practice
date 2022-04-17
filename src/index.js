document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("dog-bar")
    const infoContainer = document.getElementById("dog-info")
    const summaryContainer = document.getElementById("dog-summary-container")

    fetch("http://localhost:3000/pups")
    .then(response => response.json())
    .then(data => {
        data.forEach(element => {
            loadHeader(element)
        });
    })

    function loadHeader(data) {
        let span = document.createElement("span")
        span.innerText = data.name
        header.append(span)
        span.addEventListener("click", () => {
            showPupInfo(data)
        })
    }

    function showPupInfo(itemInfo) {
        let info = `
        <img src="${itemInfo.image}" />
        <h2>${itemInfo.name}</h2>
        <button>${itemInfo.isGoodDog ? "Good Dog!" : "Bad Dog!"}</button>
        `
        infoContainer.innerHTML = info
        infoContainer.querySelector("button").addEventListener("click", () => {
            toggleDog()
        })
        summaryContainer.append(infoContainer)
    }
    function toggleDog() {
        console.log("click")
    }
})