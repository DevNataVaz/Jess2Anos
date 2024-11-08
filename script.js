let currentPage = 1;

function nextPage() {

    // if (currentPage === 7) {
    //     window.location.href = 'finalpage.html'; 
    //     return;
    // }
    document.getElementById(`page${currentPage}`).classList.add('hidden');
    currentPage++;
    document.getElementById(`page${currentPage}`).classList.remove('hidden');
}

function trickButton() {
    const button = document.getElementById("trickButton");
    const randomX = Math.floor(Math.random() * (window.innerWidth - button.offsetWidth));
    const randomY = Math.floor(Math.random() * (window.innerHeight - button.offsetHeight));
    button.style.position = "absolute";
    button.style.left = `${randomX}px`;
    button.style.top = `${randomY}px`;
}


document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("page1").classList.remove("hidden");
});
