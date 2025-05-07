document.addEventListener("DOMContentLoaded", () => {
    const searchButton = document.getElementById("searchButton");
    const searchInput = document.getElementById("searchInput");

    if (searchButton && searchInput) {
        searchButton.addEventListener("click", () => {
            const query = searchInput.value.trim();
            if (!query) {
                alert("Inserisci un titolo valido!");
                return;
            }
            window.location.href = `infomanga.html?query=${encodeURIComponent(query)}`;
        });
    }
});
