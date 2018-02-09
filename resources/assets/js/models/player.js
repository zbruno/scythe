import { action } from 'mobx';
import Model from './baseModel';

export default class PlayerModel extends Model {
  constructor(player) {
    super(player, ['created_at', 'updated_at']);
  }

  @action update(key, value) {
    this[key] = value;
  }
}
