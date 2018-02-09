import React from 'react';
import { inject, observer } from 'mobx-react';
import { css } from 'react-emotion';
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
  factionId: '',
  engineId: '',
  stars: [],
  popularity: '',
  power: '',
  territories: '',
  structures: '',
  resources: '',
  gold: '',
  combatCards: '',
  encounters: ''
});

@inject('gameStore', 'alertStore')
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

  handleCheckboxChange = id => {
    const { currentPlayer } = this.state;
    const newPlayerData = currentPlayer;
    const numCurrentStars = currentPlayer.stars.length;

    if (currentPlayer.stars.includes(id)) {
      newPlayerData.stars = currentPlayer.stars.filter(star => star !== id);
    } else {
      if (numCurrentStars > 5) {
        return this.props.alertStore.add('No more than 6 stars!');
      }
      newPlayerData.stars = currentPlayer.stars.concat([id]);
    }
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
    const factionOptions = gameStore.factions.map(faction => ({
      key: faction.id,
      text: `${faction.name} -- (${faction.color})`,
      value: faction.id
    }));
    const engineOptions = gameStore.engines.map(engine => ({
      key: engine.id,
      text: engine.focus,
      value: engine.id
    }));

    if (
      !gameStore.factions.length ||
      !gameStore.engines.length ||
      !gameStore.starTypes.length
    ) {
      return null;
    }

    return (
      <div css="max-width: 750px; margin: 0 auto;">
        <h1>
          {gameStore.currentGame ? gameStore.currentGame.numPlayers : 0}{' '}
          player(s) added
        </h1>
        <Form>
          <Form.Group widths="equal">
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
              label="Faction"
              placeholder="Faction"
              name="factionId"
              control={Select}
              options={factionOptions}
              value={currentPlayer.factionId}
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
          </Form.Group>
          <div css="display: flex; flex-wrap: wrap; justify-content: space-between;">
            <h4 css="flex: 0 0 100%;">Stars</h4>
            {gameStore.starTypes.map(starType => (
              <Form.Field
                control={Checkbox}
                checked={currentPlayer.stars.includes(starType.id)}
                onChange={() => this.handleCheckboxChange(starType.id)}
                label={starType.type}
                className={css`
                  margin-right: 30px !important;
                `}
              />
            ))}
          </div>
          <Form.Group widths="equal">
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
          </Form.Group>
          <Form.Group widths="equal">
            <Form.Field
              onChange={this.handleChange}
              value={currentPlayer.resources}
              label="Resources"
              name="resources"
              control={Input}
              type="number"
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
          </Form.Group>
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
