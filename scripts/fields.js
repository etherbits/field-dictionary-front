const errorableFields = document.querySelectorAll('.errorable-field')

errorableFields.forEach((field) => {
  const input = field.querySelector('input')

  input.addEventListener('blur', () => {
    field.classList.add('touched')
  })
})
