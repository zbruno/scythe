import React from 'react';
import { inject, observer } from 'mobx-react';
import { css } from 'react-emotion';
import Dropzone from 'react-dropzone';
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
  numStars: 0,
  starsTypes: {
    1: 0,
    2: 0,
    3: 0,
    4: 0,
    5: 0,
    6: 0,
    7: 0,
    8: 0,
    9: 0,
  },
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
    currentPlayer: getDefaultPlayer(),
    data: null
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
    const numCurrentStars = Object.keys(currentPlayer.starsTypes).reduce((previous, key) => {
      return currentPlayer.starsTypes[parseInt(key, 10)] + previous;
    }, 0);

    if (!!currentPlayer.starsTypes[id]) {
      newPlayerData.starsTypes[id] = 0;
    } else {
      if (numCurrentStars > 5) {
        return this.props.alertStore.add('No more than 6 stars!');
      }
      newPlayerData.starsTypes[id] = 1;
    }

    const numStars = Object.keys(newPlayerData.starsTypes).filter(key => !!currentPlayer.starsTypes[key]).length;
    newPlayerData.numStars = numStars;
    this.setState({ currentPlayer: newPlayerData });
  };

  handleChangeStarSelect = (e, { name, value }) => {
    const { currentPlayer } = this.state;
    const newPlayerData = currentPlayer;
    newPlayerData.starsTypes[name] = value;
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
    const { data } = this.state;
    gameStore.submitGame({ data });
  };

  onDrop = (acceptedFiles, rejectedFiles) => {
    const imageVal = acceptedFiles[0];
    this.setState(state => ({
      currentPlayer: state.currentPlayer,
      data: imageVal
    }));
  };

  renderBattleStars = () => {
    const { currentPlayer } = this.state;
    let options = [0, 1, 2].map(id => (
      { key: id, text: id, value: id }
    ));

    if (currentPlayer.factionId == 2) {
      const moreOptions = [3, 4, 5, 6].map(id => (
        { key: id, text: id, value: id }
      ));

      options = options.concat(moreOptions);
    }

    return (
      <React.Fragment>
        <Form.Field
          label="Battles"
          name="7"
          control={Select}
          options={options}
          value={currentPlayer.starsTypes[7]}
          onChange={this.handleChangeStarSelect}
        />
      </React.Fragment>
    );
  };

  renderMissionStars = () => {
    const { currentPlayer } = this.state;
    let options = [0, 1].map(id => (
      { key: id, text: id, value: id }
    ));

    if (currentPlayer.factionId == 2) {
      const moreOptions = [2].map(id => (
        { key: id, text: id, value: id }
      ));

      options = options.concat(moreOptions);
    }

    return (
      <React.Fragment>
        <Form.Field
          label="Misson Cards"
          name="6"
          control={Select}
          options={options}
          value={currentPlayer.starsTypes[6]}
          onChange={this.handleChangeStarSelect}
        />
      </React.Fragment>
    );
  };

  render() {
    const { gameStore } = this.props;
    const { currentPlayer } = this.state;
    const userOptions = gameStore.remainingUsers.map(user => ({
      key: user.id,
      text: user.name,
      value: user.id
    }));
    const factionOptions = gameStore.remainingFactions.map(faction => ({
      key: faction.id,
      text: `${faction.name} -- (${faction.color})`,
      value: faction.id
    }));
    const engineOptions = gameStore.remainingEngines.map(engine => ({
      key: engine.id,
      text: engine.focus,
      value: engine.id
    }));

    if (!gameStore.hasLoaded) {
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
          <Form.Group widths="equal" className={css`margin: 15px 0; padding: 10px 0; border-top: 1px solid; border-bottom: 1px solid;`}>
            <div>
              {this.renderBattleStars()}
              {this.renderMissionStars()}
            </div>
            <div css="display: flex; flex-wrap: wrap; justify-content: flex-start;">
              <h4 css="flex: 0 0 100%;">Stars</h4>
              {gameStore.singleStarTypes.map(starType => (
                <Form.Field
                  control={Checkbox}
                  checked={!!currentPlayer.starsTypes[starType.id]}
                  onChange={() => this.handleCheckboxChange(starType.id)}
                  label={starType.type}
                  key={starType.id}
                  className={css`
                    flex: 0 0 50%;
                  `}
                />
              ))}
            </div>
          </Form.Group>
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
          {/* <Form.Field
            control={Button}
            className={css`
              position: relative;
            `}
          >
            <Dropzone
              onDrop={this.onDrop}
              css="position: absolute; top: 0; right: 0; left: 0; bottom: 0; opacity: 0;"
            />
            Upload Image
          </Form.Field> */}
          <Form.Field
            control={Button}
            onClick={this.addPlayer}
            disabled={gameStore.players.length === 7}
            color="red"
          >
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
