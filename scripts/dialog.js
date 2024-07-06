const dialog = document.querySelector('dialog')
const showButton = document.querySelector('#filter-modal-open-button')
const closeButton = document.querySelector('#filter-modal-close-button')

// "Show the dialog" button opens the dialog modally
showButton.addEventListener('click', () => {
  dialog.showModal()
})

// "Close" button closes the dialog
closeButton.addEventListener('click', () => {
  dialog.close()
})
