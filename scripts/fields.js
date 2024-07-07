const errorableFields = document.querySelectorAll('.errorable-field')

errorableFields.forEach((field) => {
  const input = field.querySelector('input')

  input.addEventListener('blur', () => {
    if (input.value === '') {
      field.classList.add('error')
    } else {
      field.classList.remove('error')
    }
  })

  input.addEventListener('keydown', () => {
    field.classList.remove('error')
  })
})
