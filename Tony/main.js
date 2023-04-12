window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.navbar');
    navbar.classList.toggle('change', window.scrollY > 10);
  });

  const about = document.getElementById('about')
  const fullText = document.getElementById('fullText')
  const smallText = document.getElementById('smallText')
function moreText(){
  smallText.style.display = 'none'
  fullText.style.display = 'block'
  about.style.background = 'linear-gradient(180deg, rgba(12, 12, 12, 0.8) 0%, rgb(12, 12, 12) 90%)'
}
function lessText(){
  smallText.style.display = 'block'
  fullText.style.display = 'none'
  about.style.background = 'linear-gradient(180deg, rgba(12, 12, 12, 0.5) 20%, rgb(12, 12, 12) 90%)'
}