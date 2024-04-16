console.log('Hello!')

function faqClick(clickedQuestion) {

  clickedQuestion.classList.toggle('open');

  const icon = clickedQuestion.querySelector('img');

  if (clickedQuestion.classList.contains('open')) {
    icon.src = 'assets/images/icon-minus.svg'
  }

  else {
    icon.src ='assets/images/icon-plus.svg'
  }
    
  }

