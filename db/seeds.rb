lakers = Team.create(name: "New York Knicks", wins: 14, losses: 57)
knicks = Team.create(name: "Los Angeles Lakers", wins: 31, losses: 39)

dsj = Player.create(name: "Dennis Smith Jr.", position: "Point Guard", team_id: 1)
lebron = Player.create(name: "Lebron James", position: "Small Forward", team_id: 2)

Stat.create(ppg: 13.5, apg: 4.9, rpg: 2.9, fgp: 43.1, ftp: 63.5, tov: 2.9, player_id: 1)
Stat.create(ppg: 27.5, apg: 8.0, rpg: 8.5, fgp: 51.4, ftp: 66.4, tov: 3.5, player_id: 2)

Comment.create(description: 'DSJ rocks my socks.', player_id: 1)
Comment.create(description: 'LBJ is a great player but definitely overhyped.', player_id: 2)
