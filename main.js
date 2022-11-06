const hamburger = document.querySelectorAll('.hamburger img');
const links = document.querySelector('.links');
const linkLis = document.querySelectorAll('.links .main > li');

linkLis.forEach((li) => {
  if (li.children.length) {
    li.addEventListener('click', (e) => {
      if (li.children[0].style.display == 'none') {
        li.children[0].style.display = 'inline'
        li.children[1].style.display = 'none'
        li.children[2].style.display = 'none'
      } else {
        li.children[0].style.display = 'none'
        li.children[1].style.display = 'inline'
        li.children[2].style.display = 'block'
      }
    })
  }
})

hamburger[0].parentNode.addEventListener('click', (e) => {
  if (window.innerWidth <= 767) {
    if (e.target == hamburger[0]) {
      links.style.right = '0';
      hamburger[0].style.display = 'none';
      hamburger[1].style.display = 'block';
    } else {
      links.style.right = '-100rem';
      hamburger[0].style.display = 'block';
      hamburger[1].style.display = 'none';
    }
  }
})