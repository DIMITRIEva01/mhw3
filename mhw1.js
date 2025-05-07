document.addEventListener('DOMContentLoaded', () => {

  const cuori = document.querySelectorAll('.cuoricino');
  cuori.forEach(cuore => {
    cuore.addEventListener('click', () => {
      cuore.classList.toggle('preferito');
    });
  });


  const buttons = document.querySelectorAll('.button');
  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const articolo = button.closest('.articolo');
      const title = articolo.querySelector('.titolo-articolo')?.textContent;
      const prezzo = articolo.querySelector('.prezzo-articolo')?.textContent;
      if (title && prezzo) {
        alert(`Hai aggiunto al carrello:\n${title}\nPrezzo: ${prezzo}`);
      }
    });
  });

  const dots = document.querySelectorAll('.scorrimento .dot');
  const mainImage = document.querySelector('.home-image img');

  dots.forEach(dot => {
    dot.addEventListener('click', () => {
      const newSrc = dot.dataset.image;
      mainImage.src = newSrc;

      dots.forEach(d => d.classList.remove('active'));
      dot.classList.add('active');
    });
  });

  if (dots.length > 0) {
    dots[0].classList.add('active');
  }

});

 