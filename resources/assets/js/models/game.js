import { observable, action, computed } from 'mobx';
import Model from './baseModel';

export default class GameModel extends Model {
  constructor(game) {
    super(game, ['created_at', 'updated_at']);
  }

  @observable players = [];

  @computed
  get numPlayers() {
    return this.players.length;
  }

  @action
  addPlayer(player) {
    this.players.push(player);
  }
}
