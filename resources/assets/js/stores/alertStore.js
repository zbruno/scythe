import { observable, action } from 'mobx';
import { v4 } from 'uuid';

const SECOND = 1000;

class AlertStore {
  @observable alerts = [];

  @action
  add(alertText, alertType = 'danger', duration = 4 * SECOND) {
    const id = `alert__${v4()}`;
    const alert = { id, alertType, duration, alertText };
    this.alerts.push(alert);
  }

  @action.bound
  removeAlert(alert) {
    this.alerts.splice(this.alerts.indexOf(alert.id), 1);
  }
}

export default new AlertStore();
