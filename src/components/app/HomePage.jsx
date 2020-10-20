import React, { Component } from 'react';
import { getCharacters } from '../../services/hey-arnold-api';

export default class HomePage extends Component {
  state = {
    characters: []
  }

  componentDidMount = async() => {
    await getCharacters()
      .then(characters => this.setState({ characters }));
  }

  render() {
    const { characters } = this.state;

    const characterElements = characters.map(character => (
      <li key={character.name}>
        {character.name}
      </li>
    ));

    return (
      <div>
        <ul>{characterElements}</ul>
      </div>
    );
  }
}
