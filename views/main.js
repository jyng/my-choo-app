var html = require('choo/html')

var TITLE = 'my-choo-app - main'

module.exports = view

function view (state, emit) {
  if (state.title !== TITLE) emit(state.events.DOMTITLECHANGE, TITLE)

  return html`
    <body class="helvetica ma5 lh-copy">
      <h1>Jimmy Young</h1>
      <h2>SF, CA</h2>

      <h2>Working on:</h2>
      <ul>
      <li>Interface</li>
      <li>Photos</li>
      <li>Sounds</li>
      </ul>


    </body>
  `

  function handleClick () {
    emit('clicks:add', 1)
  }
}
