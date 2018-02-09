import React from 'react';
import { inject, observer } from 'mobx-react';
import {
  Button,
  Checkbox,
  Form,
  Input,
  Radio,
  Select,
  TextArea
} from 'semantic-ui-react';

const getDefaultPlayer = () => ({
  id: '',
  raceId: '',
  engineId: '',
  popularity: '',
  power: '',
  territories: '',
  stars: '',
  structures: '',
  gold: '',
  combatCards: '',
  encounters: ''
});

@inject('gameStore')
@observer
class PlayerForm extends React.Component {
  state = {
    currentPlayer: getDefaultPlayer()
  };

  handleChange = (e, { name, value }) => {
    const { currentPlayer } = this.state;
    const newPlayerData = currentPlayer;
    newPlayerData[name] = value;
    this.setState({ currentPlayer: newPlayerData });
  };

  addPlayer = () => {
    const { gameStore } = this.props;
    const { currentPlayer } = this.state;
    gameStore.addPlayer(currentPlayer);
    this.setState({ currentPlayer: getDefaultPlayer() });
  };

  submit = () => {
    const { gameStore } = this.props;
    gameStore.submitGame();
  };

  render() {
    const { gameStore } = this.props;
    const { currentPlayer } = this.state;
    const userOptions = gameStore.users.map(user => ({
      key: user.id,
      text: user.name,
      value: user.id
    }));
    const raceOptions = gameStore.races.map(race => ({
      key: race.id,
      text: `${race.name} -- (${race.color})`,
      value: race.id
    }));
    const engineOptions = gameStore.engines.map(engine => ({
      key: engine.id,
      text: engine.focus,
      value: engine.id
    }));

    if (!gameStore.races.length || !gameStore.engines.length) {
      return null;
    }

    return (
      <div css="max-width: 500px; margin: 0 auto;">
        <h1>
          {gameStore.currentGame ? gameStore.currentGame.numPlayers : 0}{' '}
          player(s) added
        </h1>
        <Form>
          <Form.Field
            label="User"
            placeholder="User"
            name="id"
            control={Select}
            options={userOptions}
            value={currentPlayer.id}
            onChange={this.handleChange}
          />
          <Form.Field
            label="Race"
            placeholder="Race"
            name="raceId"
            control={Select}
            options={raceOptions}
            value={currentPlayer.raceId}
            onChange={this.handleChange}
          />
          <Form.Field
            label="Engine"
            placeholder="Engine"
            name="engineId"
            control={Select}
            options={engineOptions}
            value={currentPlayer.engineId}
            onChange={this.handleChange}
          />
          <Form.Field
            onChange={this.handleChange}
            value={currentPlayer.popularity}
            label="Popularity"
            name="popularity"
            control={Input}
            type="number"
            max={18}
            min={0}
          />
          <Form.Field
            onChange={this.handleChange}
            value={currentPlayer.power}
            label="Power"
            name="power"
            control={Input}
            type="number"
            max={16}
            min={0}
          />
          <Form.Field
            onChange={this.handleChange}
            value={currentPlayer.stars}
            label="Stars"
            name="stars"
            control={Input}
            type="number"
            max={6}
            min={0}
          />
          <Form.Field
            onChange={this.handleChange}
            value={currentPlayer.territories}
            label="Territories"
            name="territories"
            control={Input}
            type="number"
            min={0}
          />
          <Form.Field
            onChange={this.handleChange}
            value={currentPlayer.structures}
            label="Structures"
            name="structures"
            control={Input}
            type="number"
            max={9}
            min={0}
          />
          <Form.Field
            onChange={this.handleChange}
            value={currentPlayer.gold}
            label="Gold"
            name="gold"
            control={Input}
            type="number"
            min={0}
          />
          <Form.Field
            onChange={this.handleChange}
            value={currentPlayer.combatCards}
            label="Combat Cards"
            name="combatCards"
            control={Input}
            type="number"
            min={0}
          />
          <Form.Field
            onChange={this.handleChange}
            value={currentPlayer.encounters}
            label="Encounters"
            name="encounters"
            control={Input}
            type="number"
            max={11}
            min={0}
          />
          <Form.Field control={Button} onClick={this.addPlayer}>
            Add Player
          </Form.Field>
          <Form.Field control={Button} onClick={this.submit}>
            Submit
          </Form.Field>
        </Form>
      </div>
    );
  }
}

export default PlayerForm;

