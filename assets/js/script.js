console.log('Hello!')

  const faqItems = document.querySelectorAll('.faq');

  faqItems.forEach((item) => {
    item.addEventListener('click', () => {
      item.classList.toggle('open');
    });
  });
