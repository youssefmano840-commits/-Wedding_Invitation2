
function openLetter() {
    const envelope = document.getElementById("envelope");
    const opening = document.getElementById("opening");
    const website = document.getElementById("website");

    if (!envelope || !opening || !website) {
        alert("There is a missing element in the invitation!");
        return;
    }

    envelope.classList.add("open");

    setTimeout(function() {
        opening.classList.add("closed");
        website.classList.add("show");
        window.scrollTo(0, 0);
    }, 2200);
}

const weddingDate = new Date("December 28, 2026 20:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference <= 0) {
        document.getElementById("days").innerText = "00";
        document.getElementById("hours").innerText = "00";
        document.getElementById("minutes").innerText = "00";
        document.getElementById("seconds").innerText = "00";
        return;
    }

    document.getElementById("days").innerText =
        Math.floor(difference / (1000 * 60 * 60 * 24));

    document.getElementById("hours").innerText =
        Math.floor((difference / (1000 * 60 * 60)) % 24);

    document.getElementById("minutes").innerText =
        Math.floor((difference / (1000 * 60)) % 60);

    document.getElementById("seconds").innerText =
        Math.floor((difference / 1000) % 60);
}

updateCountdown();
setInterval(updateCountdown, 1000);


