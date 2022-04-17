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
        let button = infoContainer.querySelector("button")
        button.addEventListener("click", () => {
            itemInfo.isGoodDog ? itemInfo.isGoodDog = false : itemInfo.isGoodDog = true
            updateBtnText(itemInfo.isGoodDog, button)
            toggleDog(itemInfo)
        })
        summaryContainer.append(infoContainer)
    }

    function updateBtnText(dogStatus, btn) {
        dogStatus ? btn.innerText = "Good Dog!" : btn.innerText = "Bad Dog!"
    }

    function toggleDog(item) {
        fetch(`http://localhost:3000/pups/${item.id}`, {
            method: 'PATCH',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(item)
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }
})