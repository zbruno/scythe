import { observable, action, computed } from 'mobx';
import axios from 'axios';
import Urls from 'js/urls';
import GameModel from 'js/models/game';
import PlayerModel from 'js/models/player';

class GameStore {
  @observable currentGame;
  @observable engines = [];
  @observable races = [];
  @observable users = [];
  @observable players = [];

  @action getGames() {
    axios.get(Urls.games).then(res => {
      const { engines, races, users } = res.data;
      engines.map(engine => this.engines.push(engine));
      races.map(race => this.races.push(race));
      users.map(user => this.users.push(user));
    });
  }

  @action addPlayer(player) {
    if (!this.currentGame) {
      this.currentGame = new GameModel({});
    }

    this.currentGame.addPlayer(new PlayerModel(player));
  }

  @action submitGame() {
    const data = this.currentGame;
    axios.post(Urls.games, data).then(res => console.log(res));
  }
}

export default new GameStore();
