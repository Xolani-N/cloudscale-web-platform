function updateDashboard() {

    document.getElementById("cpu").textContent =
        Math.floor(Math.random() * 40) + 10 + "%";

    document.getElementById("ram").textContent =
        Math.floor(Math.random() * 50) + 25 + "%";

    document.getElementById("time").textContent =
        new Date().toLocaleTimeString();

}

setInterval(updateDashboard, 1000);

updateDashboard();
