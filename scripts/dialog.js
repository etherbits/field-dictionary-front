const filterDialog = document.querySelector('#filter-modal')
const showButton = document.querySelector('#filter-modal-open-button')
const closeButton = document.querySelector('#filter-modal-close-button')

// "Show the dialog" button opens the dialog modally
showButton.addEventListener('click', () => {
  filterDialog.showModal()
})

// "Close" button closes the dialog
closeButton.addEventListener('click', () => {
  filterDialog.close()
})

filterDialog.addEventListener('mousedown', (event) => {
  if (event.target === filterDialog) {
    filterDialog.close()
  }
})
