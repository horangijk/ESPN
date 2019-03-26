$(function(){

  listenForPlayers()
  showPlayer()
})

function listenForPlayers(){
  $('.all_players').on('click', function(e) {
    e.preventDefault()
    fetch('/players.json')
      .then(res => res.json())
      .then(players => {
        $('.players_container').html('')
        players.forEach(player => {
        let newPlayer = new Player(player)
        history.pushState(null, null, 'players')
        let playerHtml = newPlayer.formatIndex()

        $('.players_container').append(playerHtml)

      })
    })
  })

}

function Player(player){
  this.id = player.id
  this.name = player.name
  this.position = player.position
  this.stats = player.stats
  this.team = player.team
  this.comments = player.comments
}

Player.prototype.formatIndex = function(){
  let playerHtml = `
    <a href='/players/${this.id}' data-id="${this.id}" class="show_link"><h1>${this.name}</h1></a>
  `
  return playerHtml
}

function showPlayer(){
  $(document).on('click', '.show_link', function(e) {
    e.preventDefault()
    let id = $(this).attr("data-id")
    fetch(`/players/${id}.json`)
    .then(res => res.json())
    .then(player => {
      $('.players_container').html('')
      let newPlayer = new Player(player)
      let playerHtml = newPlayer.formatShow()

      $('.players_container').append(playerHtml)
    })

  })

}

Player.prototype.formatShow = function(){
  console.log(this.stats)
  let playerHtml = `
    <h3>${this.name}</h3>
    <ul>
      ${this.stats.map(stat => {
      return `<li>PPG: ${stat.ppg}</li>
      <li>RPG: ${stat.rpg}</li>
      <li>APG: ${stat.apg}</li>
      <li>FGP: ${stat.fgp}</li>
      <li>FTP: ${stat.ftp}</li>
      <li>TOV: ${stat.tov}</li>`
    })}
    </ul>
  `

  return playerHtml
}
