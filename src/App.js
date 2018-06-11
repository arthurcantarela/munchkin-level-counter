import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      players: [],
      player: "Canta"
    };
  }

  addPlayer = () => {
    this.setState(prevState => ({
      players: [...prevState.players, prevState.player],
      player: "Canta"
    }));
  };

  typePlayerName = e => this.setState({ player: e.target.value });

  render = () => (
    <React.Fragment>
      <h1>Munchkin</h1>
      <input
        value={this.state.player}
        onChange={this.typePlayerName.bind(this)}
      />
      <button onClick={this.addPlayer.bind(this)}>Add a player</button>
      <ul>
        {this.state.players.map((player, i) => <li key={i}>{player}</li>)}
      </ul>
    </React.Fragment>
  );
}

export default App;
