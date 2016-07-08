'use strict'

var Roles = {
  // list of roles
  Villager: require('./villager'),
  Wolf: require('./wolf'),
}; 

exports.Roles = Roles;

// list of Roles' id
exports.role_list = [ 'villager', 'wolf' ];
exports.event_list = [ 'bite' ];

exports.setRandomRoles = function (wolf, players) {
  // TODO: set player role here
  // for test
  players[0].role = new Roles.Wolf(wolf, players[0]);
  if (players.length > 1) {
    players[1].role = new Roles.Villager(wolf, players[1]);
  }
};

exports.processCallback = function (wolf, upd, followString) {
  console.log(wolf, upd, followString);
  for (var u of wolf.players) {
    if (u.id === upd.from.id) {
      console.log('got user', u.id);
      u.role.eventCallback(wolf.when, wolf.queue, upd, upd.callback_query.data);
      break;
    }
  }
};
