async function chiediConsiglio() {
  const input = document.getElementById('preferiti').value;
  try {
    const res = await fetch('/api/consiglia', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ messaggio: input })
    });
    if (!res.ok) {
      const errorData = await res.json();
      throw new Error(errorData.risposta || 'Errore sconosciuto');
    }
    const data = await res.json();
    document.getElementById('risposta').textContent = data.risposta;

  } catch (error) {
    document.getElementById('risposta').textContent = `Errore: ${error.message}`;
    console.error('Errore:', error);
  }
}
