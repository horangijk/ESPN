$(() => {
  bindClickHandlers()
})


const bindClickHandlers = () => {
    $('.all_players').on('click', (e) => {
      e.preventDefault()
      console.log('hello')
    })
}
