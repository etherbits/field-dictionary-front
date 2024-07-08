const errorableFields = document.querySelectorAll('.errorable-field')

errorableFields.forEach((field) => {
  input = field.querySelector('input') ?? field.querySelector('textarea')
  console.log(input)

  input.addEventListener('blur', () => field.classList.add('touched'))
})
