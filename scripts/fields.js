const errorableFields = document.querySelectorAll('.errorable-field')

errorableFields.forEach((field) => {
  input = field.querySelector('input') ?? field.querySelector('textarea')

  input.addEventListener('blur', () => field.classList.add('touched'))
})
