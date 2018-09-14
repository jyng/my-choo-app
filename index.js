// var css = require('sheetify')
// var choo = require('choo')
//
// css('tachyons')
// // import choo from 'choo'
// // import Submission from './stores/submission'
// const app = choo()
//
// if (process.env.NODE_ENV !== 'production') {
//   app.use(require('choo-devtools')())
// } else {
//   app.use(require('choo-service-worker')())
// }
//
// app.use(require('./stores/clicks'))
//
// app.route('/', require('./views/main'))
// app.route('/*', require('./views/404'))
//
// module.exports = app.mount('body')
var html = require('choo/html')
var choo = require('choo')

var app = choo()
app.route('/', main)
app.mount('body')


function main () {
  return html`
  <body>
    <form id="login" onsubmit=${onsubmit}>
      <label for="username">
        username
      </label>
      <input
        id="username"
        name="username"
        type="text"
        required
        pattern=".{1,5}"
        title="Username must be between 1 and 5 characters long."
       />
       <label for="password">
          password
       </label>
       <input
         id="password"
         name="password"
         type="password"
         required
        />
        <input type="submit" value="Login">
    </form>
  </body>
  `
  function onsubmit (e) {
    e.preventDefault()
    var form = e.currentTarget
    var data = new FormData(form)
    var headers= new Headers({ 'Content-Type': 'application/json' })
    var body = {}
    for (var pair of data.entries()) body[pair[0]] = pair[1]
    body = JSON.stringify(body)
    fetch('/dashboard', {method: 'POST', body, headers})
      .then(res =>{
        if (!res.ok) return console.log('oh no!')
        console.log('request ok :)')
      })
      .catch(err => console.log('oh no!'))
  }


}
