$(function(){

  listenForPlayers()
  showPlayer()
  newPlayer()
  sortPlayers()
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
  player.id = player.id
  this.name = player.name
  this.position = player.position
  this.stats = player.stats
  this.team = player.team
  this.comments = player.comments
}

Player.prototype.formatIndex = function(){
  let playerHtml = `
    <a href='/players/${this.id}' data-id="${this.id}" class="show_link"><h1>${this.name}</h1>
    <h5>${this.position}</h5></a>
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
    <h5>${this.position}</h5>
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

function newPlayer(){
  $(".new_player").on("submit", function(e){
    e.preventDefault()

    const name = e.target.name.value
    const position = e.target.position.value

    const playerObj = { player: {name: name, position: position}}
    console.log(playerObj);

    fetch('http://localhost:3000/players', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(playerObj)
    })
    .then(res => res.json())
    .then(data => {
      $('.players_container').html('')
      $('.players_container').html(`<h3>${data.name}</h3>
      <h5>${data.position}</h5>`)
    })
    //
    // const values = $(this).serialize()
    // $.post('/players', values).done(function(data){
    //   $('.players_container').html('')
    //   console.log(data);
    //   const newPlayer = new Player(data)
    //   const htmlToAdd = newPlayer.formatShow()
    //   $('.players_container').html(htmlToAdd)
    // })
  })
}

function sortPlayers() {
  $(".sorted_players").on("click", function(e) {
    e.preventDefault()
    fetch("/players.json")
      .then(res => res.json())
      .then(players => {
        $('.players_container').html('')
        let sortedPlayers = players.sort(function(a, b) {
          var positionA = a.position.toUpperCase(); // ignore upper and lowercase
          var positionB = b.position.toUpperCase(); // ignore upper and lowercase
          if (positionA < positionB) {
            return -1;
          }
          if (positionA > positionB) {
            return 1;
          }

          var nameA = a.name.toUpperCase(); // ignore upper and lowercase
          var nameB = b.name.toUpperCase(); // ignore upper and lowercase
          if (nameA < nameB) {
            return -1;
          }
          if (nameA > nameB) {
            return 1;
          }


          // positions must be equal
          return 0;
        });

        sortedPlayers.forEach(player => {
          let newPlayer = new Player(player)
          let playerHtml = newPlayer.formatIndex()

          $('.players_container').append(playerHtml)
        })
      })
  })
}
