function faqClick(e) {

  e.preventDefault()
  const clickedQuestion = e.currentTarget;

  clickedQuestion.classList.toggle('open');

  const icon = clickedQuestion.querySelector('img');

  if (clickedQuestion.classList.contains('open')) {
    icon.src = 'assets/images/icon-minus.svg';
    icon.alt= "Close Icon"
  }

  else {
    icon.src = 'assets/images/icon-plus.svg';
    icon.alt= "Open Icon"
  }
    
}

const faqQuestions = document.querySelectorAll('.faq');
  
faqQuestions.forEach((question) => {
  question.addEventListener('click', faqClick);
});

