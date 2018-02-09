// import React from 'react';
// import { inject, observer } from 'mobx-react';
// import SelectField from 'material-ui/SelectField';
// import MenuItem from 'material-ui/MenuItem';
// import RaisedButton from 'material-ui/RaisedButton';

// @inject('gameStore')
// @observer
// class CreateGame extends React.Component {
//   state = {
//     numPlayers: 0
//   };

//   handleChange = (event, index, value) => this.setState({ numPlayers: value });

//   startGame = () => {
//     const { gameStore } = this.props;
//     gameStore.startGame(this.state.numPlayers);
//   };

//   render() {
//     const { numPlayers } = this.state;

//     return (
//       <div
//         css="display: flex; align-items: center; justify-content: center; flex-wrap: wrap;"
//       >
//         <h1>How many players are playing?</h1>
//         <SelectField
//           floatingLabelText="Number of Players"
//           value={numPlayers}
//           onChange={this.handleChange}
//         >
//           <MenuItem value={1} primaryText="1" />
//           <MenuItem value={2} primaryText="2" />
//           <MenuItem value={3} primaryText="3" />
//           <MenuItem value={4} primaryText="4" />
//           <MenuItem value={5} primaryText="5" />
//           <MenuItem value={6} primaryText="6" />
//           <MenuItem value={7} primaryText="7" />
//         </SelectField>
//         <RaisedButton
//           label="Submit"
//           primary
//           onClick={this.startGame}
//           disabled={numPlayers === 0}
//         />
//       </div>
//     );
//   }
// }

// export default CreateGame;
