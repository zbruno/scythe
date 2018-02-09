import { computed, observable, action } from 'mobx';
import axios from 'axios';
import Urls from '../urls';

class AuthStore {
  @computed get isLoggedIn() {
    return this.loginSuccess;
  }

  @action setLoginSuccess() {
    this.loginSuccess = true;
  }
}

export default new AuthStore();
