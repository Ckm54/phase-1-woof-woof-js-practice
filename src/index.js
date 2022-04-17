document.addEventListener("DOMContentLoaded", () => {
    const header = document.getElementById("dog-bar")

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
            showPupInfo()
        })
    }

    function showPupInfo() {
        console.log("click")
    }
})