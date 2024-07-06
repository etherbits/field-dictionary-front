// generate burger only for mobile devices
function handleBurgerMenuGeneration() {
  const menu = document.querySelector('#burger-menu')

  if (window.innerWidth > 1280) {
    if (menu) {
      cleanUpBurgerMenu()
    }
    return
  }

  if (menu) return

  generateBurgerMenu()

  const menuButton = document.querySelector('#menu-button')
  menuButton.addEventListener('click', handleBurgerClick)
}

function handleBurgerClick() {
  const burgerMenu = document.querySelector('#burger-menu')
  burgerMenu.classList.toggle('active')
}

function cleanUpBurgerMenu() {
  const menu = document.querySelector('#burger-menu')
  const menuButton = document.querySelector('#menu-button')

  menu.remove()
  menuButton.removeEventListener('click', handleBurgerClick)
}

window.onload = handleBurgerMenuGeneration
window.onresize = handleBurgerMenuGeneration

const links = [
  { name: 'ლექსიკონი', link: '/' },
  { name: 'ლექსიკონის შესახებ', link: '/about' },
  { name: 'კონტაქტი', link: '/contact' },
]

function generateBurgerMenu() {
  const template = document.createElement('template')

  template.innerHTML = `
		<section id="burger-menu">
			<button id="burger-menu-close-button" class="vector-button">
				<img src="/public/vectors/close.svg" alt="close"/>
			</button>
			<nav>
				${links.map((link) => `<a href="${link.link}">${link.name}</a>`).join('')}	
			</nav>
		</section>
	`

  document.body.appendChild(template.content.cloneNode(true))

  const closeButton = document.querySelector('#burger-menu-close-button')
  closeButton.addEventListener('click', () => {
    const burgerMenu = document.querySelector('#burger-menu')
    burgerMenu.classList.remove('active')
  })
}
