window.onload = generateTermList()

async function generateTermList() {
  const terms = await fetchTempTermData()
  const termCardHTMLs = []

  terms.forEach((term) => {
    termCardHTMLs.push(`
			<article class="term-card">
				<div class="field">
				${term.fields
          .map((field) => {
            return `<a href="${field.link}">${field.value}</a>`
          })
          .join(' > ')}
				</div>
				<h3 class="word-pair">${term.word_ka} - ${term.word_en}</h3>
				<span class="word-type">${term.type}</span>
				<p class="term-source"><span class="term-source-label">ტერმინის წყარო: </span>${term.source}</p>
				<div class="term-controls">
					<button class="term-button vector-button" title="სრული ინფორმაციის ჩვენება">
						<img class="term-button-img" src="/public/vectors/term-details.svg" alt="term details" />
					</button>
					<button class="term-button vector-button">
						<img class="term-button-img" src="/public/vectors/definition.svg" alt="term definition" />
					</button>
					<button class="term-button vector-button">
						<img class="term-button-img" src="/public/vectors/context.svg" alt="term context" />
					</button>
					<button class="term-button vector-button">
						<img class="term-button-img" src="/public/vectors/connections.svg" alt="term connections" />
					</button>
					<button class="term-button vector-button">
						<img class="term-button-img" src="/public/vectors/comment.svg" alt="comment term" />
					</button>
				</div>
			</article>
    `)
  })

  const termList = document.querySelector('#term-list')
  const termCardTemplate = document.createElement('template')

  termCardTemplate.innerHTML = termCardHTMLs.join('')
  termList.appendChild(termCardTemplate.content.cloneNode(true))
}

async function fetchTempTermData() {
  const res = await fetch('../temp_data/terms.json')
  const data = await res.json()
  return data
}
