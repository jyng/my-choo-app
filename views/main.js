var html = require('choo/html')
var choo = require('choo')
var TITLE = 'Jimmy Young'

module.exports = view

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
        pattern=".{1.36}"
        title="Username must be between 1 and 36 characters long."
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
        input type="submit" value="Login">
    </form>
  </body>
  `
  function onsubmit (e) {
    e.preventDefault()
    var form = e.currentTarget
    var body = new FormData(form)
    fetch('/dashboard', {method: 'POST', body})
      .then(res =>{
        if (!res.ok) return console.log('oh no!')
        console.log('request ok \o/')
      })
      .catch(err => console.log('oh no!'))
  }


}
