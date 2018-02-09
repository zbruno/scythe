import React from 'react';
import { inject, observer } from 'mobx-react';
import CreateGame from './components/createGame';
import PlayerForm from './components/playerForm';

@inject('gameStore')
@observer
class Home extends React.Component {
  componentDidMount() {
    const { gameStore } = this.props;
    gameStore.getGames();
  }

  renderComponent = () => {
    const { gameStore } = this.props;
    return <PlayerForm />;
  };

  render() {
    return this.renderComponent();
  }
}

export default Home;
