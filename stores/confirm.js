import choo from 'choo'

const Confirm = (app, confirmEvent) => {
  app.model({
    namespace: 'confButt',
    state: { status: 'waiting' },
    reducers: {
      maybeSubmit: (action, state) => ({status: 'confirm'}),
      cancelSubmit: (action, state) => ({status: 'waiting'})
    },
    effects: {
      confirmSubmit: (action, state, send) => {
        send('confButt: cancelSubmit')
        send(confirmEvent)
      }
    }
  })
  return (state, disabled, send) => state.confButt.status !== 'confirm'
  ? choo.view`
    <button onclick=${e => send('confButt: maybeSubmit')} disabled=${disabled}> Submit</button>
  `
  : choo.view`
    <span>
      <button onclick=${e => send('confButt: cancelSubmit')}>Cancel</button>
      <button onclick=${e => send('confButt: confirmSubmit')}>Confirm</button>
    </span>
  `
}

export default Confirm
