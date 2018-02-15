import { observable, action, computed } from 'mobx';
import axios from 'axios';
import Urls from 'js/urls';
import GameModel from 'js/models/game';
import PlayerModel from 'js/models/player';
import StarTypeModel from 'js/models/starType';
import EngineModel from 'js/models/engine';
import FactionModel from 'js/models/faction';

class GameStore {
  @observable currentGame;
  @observable hasLoaded = false;
  @observable engines = [];
  @observable factions = [];
  @observable users = [];
  @observable players = [];
  @observable starTypes = [];

  @action
  getGames() {
    axios.get(Urls.games).then(res => {
      const { engines, factions, users, star_types } = res.data;
      engines.map(engine => this.engines.push(new EngineModel(engine)));
      factions.map(faction => this.factions.push(new FactionModel(faction)));
      users.map(user => this.users.push(new PlayerModel(user)));
      star_types.map(starType =>
        this.starTypes.push(new StarTypeModel(starType))
      );
      this.hasLoaded = true;
    });
  }

  @computed
  get battleStars() {
    return this.starTypes.filter(
      starType => starType.id === 7 || starType.id === 8
    );
  }

  @computed
  get missionStar() {
    return this.starTypes.find(starType => starType.id === 6);
  }

  @computed
  get singleStarTypes() {
    return this.starTypes.filter(
      starType => starType.id !== 6 && starType.id !== 7
    );
  }

  @computed
  get remainingEngines() {
    const usedEngines = this.players.map(p => p.engineId);
    return this.engines.filter(engine => !usedEngines.includes(engine.id));
  }

  @computed
  get remainingFactions() {
    const usedFactions = this.players.map(p => p.factionId);
    return this.factions.filter(faction => !usedFactions.includes(faction.id));
  }

  @computed
  get remainingUsers() {
    const usedUsers = this.players.map(p => p.id);
    return this.users.filter(user => !usedUsers.includes(user.id));
  }

  @action
  addPlayer(player) {
    if (!this.currentGame) {
      this.currentGame = new GameModel({});
    }

    this.currentGame.addPlayer(new PlayerModel(player));
  }

  @action
  submitGame(dataObj) {
    const data = this.currentGame;
    axios.post(Urls.games, data).then(res => console.log(res));
  }
}

export default new GameStore();
