const dialogs = document.querySelectorAll('dialog')
const filterDialog = document.querySelector('#filter-modal')
const showButton = document.querySelector('#filter-modal-open-button')
const closeButton = document.querySelector('#filter-modal-close-button')

// "Show the dialog" button opens the dialog modally
showButton?.addEventListener('click', () => {
  filterDialog.showModal()
})

// "Close" button closes the dialog
closeButton?.addEventListener('click', () => {
  filterDialog.close()
})

dialogs.forEach((dialog) =>
  dialog.addEventListener('mousedown', (event) => {
    if (event.target === dialog) {
      dialog.close()
    }
  })
)

const subscribeForm = document.querySelector('#subscribe-form')
const successDialog = document.querySelector('#success-modal')
const errorDialog = document.querySelector('#error-modal')
const errorDialogCloseButton = document.querySelector(
  '#error-modal-close-button'
)

let didSubmit = false

subscribeForm.addEventListener('submit', (e) => {
  e.preventDefault()
  didSubmit = true
})

const subscribeButton = subscribeForm.querySelector('button')
subscribeButton.addEventListener('mousedown', () => {
  didSubmit = false
  setTimeout(() => {
    if (didSubmit) {
      successDialog.showModal()
    } else {
      errorDialog.showModal()
    }
  }, 200)
})

errorDialogCloseButton.addEventListener('click', () => {
  errorDialog.close()
})