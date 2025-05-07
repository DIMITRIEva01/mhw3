async function searchManga() {
    const query = document.getElementById('searchInput').value;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    if (!query) {
        resultDiv.innerHTML = '<p>Inserisci un titolo!</p>';
        return;
    }

    try {
        const mangaResponse = await fetch(`https://api.mangadex.org/manga?title=${encodeURIComponent(query)}&includes[]=cover_art&limit=5`);
        const mangaData = await mangaResponse.json();

        if (!mangaData.data || mangaData.data.length === 0) {
            resultDiv.innerHTML = '<p>Nessun manga trovato!</p>';
            return;
        }

        const manga = mangaData.data[0];
        const mangaId = manga.id;
        const mangaTitle = manga.attributes.title.en || 'Titolo non disponibile';
        const mangaDescription = manga.attributes.description.en ? manga.attributes.description.en.replace(/\n/g, '<br>') : 'Descrizione non disponibile';

        const coverResponse = await fetch(`https://api.mangadex.org/cover?manga[]=${mangaId}`);
        const coverData = await coverResponse.json();

        if (!coverData.data || coverData.data.length === 0) {
            resultDiv.innerHTML = `<h2>${mangaTitle}</h2><p>${mangaDescription}</p><p>Nessuna copertina disponibile.</p>`;
            return;
        }

        const coverFilename = coverData.data[0].attributes.fileName;
        const coverUrl = `https://uploads.mangadex.org/covers/${mangaId}/${coverFilename}`;

        resultDiv.innerHTML = `
            <h2>${mangaTitle}</h2>
            <p>${mangaDescription}</p>
            <img src="${coverUrl}" alt="Copertina di ${mangaTitle}" style="max-width: 300px;">
        `;
    } catch (error) {
        resultDiv.innerHTML = `<p>Errore nella ricerca!</p>`;
        console.error('Errore:', error);
    }
}
