const filterContents = document.querySelectorAll('.filter-content')

filterContents.forEach((filterContent) => {
  const resetFiltersButton = filterContent.querySelector(
    '.reset-filters-button'
  )

  resetFiltersButton?.addEventListener('click', () => {
    const checkboxes = filterContent.querySelectorAll('input[type=checkbox]')

    checkboxes.forEach((checkbox) => (checkbox.checked = 0))
  })
})

const checkboxGroups = document.querySelectorAll('.checkbox-group')

checkboxGroups.forEach((checkboxGroup) => {
  makeFilterToggleable(checkboxGroup) // Make filter subfields togglable
  makeFiltersDerived(checkboxGroup) // Make connect field and subfield state
})

function makeFilterToggleable(checkboxGroup) {
  const arrowBtn = checkboxGroup.querySelector(
    '.checkbox-container > .vector-button'
  )

  if (!arrowBtn) return

  const checkboxList = checkboxGroup.querySelector('.checkbox-list')

  if (!checkboxList) {
    arrowBtn.disabled = true
    return
  }

  arrowBtn.addEventListener('click', () => {
    checkboxGroup.classList.toggle('open')
  })
}

function makeFiltersDerived(checkboxGroup) {
  const filterCheckbox = checkboxGroup.querySelector(
    '.checkbox-container > input'
  )

  const subfilterCheckboxes = checkboxGroup.querySelectorAll(
    '& > .checkbox-list input'
  )

  function checkIfAllSubsChecked() {
    const isEverySubfilterChecked = [...subfilterCheckboxes]
      .map((x) => x.checked)
      .every((x) => x)

    if (isEverySubfilterChecked) {
      filterCheckbox.checked = true
    } else {
      filterCheckbox.checked = false
    }
  }

  subfilterCheckboxes.forEach((subfilterCheckbox) => {
    subfilterCheckbox.addEventListener('change', () => {
      checkIfAllSubsChecked()
      filterCheckbox.dispatchEvent(new Event('update'))
    })

    subfilterCheckbox.addEventListener('update', () => {
      checkIfAllSubsChecked()
      filterCheckbox.dispatchEvent(new Event('update'))
    })
  })

  filterCheckbox.addEventListener(
    'change',
    (e) => {
      console.log(e.target)
      subfilterCheckboxes.forEach(
        (checkbox) => (checkbox.checked = e.target.checked)
      )
    },
    { capture: true }
  )
}
