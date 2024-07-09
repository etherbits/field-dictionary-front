const filterContents = document.querySelectorAll('.filter-content')
console.log(filterContents)

filterContents.forEach((filterContent) => {
  const resetFiltersButton = filterContent.querySelector(
    '.reset-filters-button'
  )

  resetFiltersButton?.addEventListener('click', () => {
    const checkboxes = filterContent.querySelectorAll('input[type=checkbox]')
    console.log(checkboxes)

    checkboxes.forEach((checkbox) => (checkbox.checked = 0))
  })
})
