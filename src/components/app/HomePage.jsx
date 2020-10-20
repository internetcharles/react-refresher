import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
      <Link key={character._id} to={`/${character._id}`}>
        <li key={character.name}>
          {character.name}
        </li>
      </Link>
    ));

    return (
      <div>
        <ul>{characterElements}</ul>
      </div>
    );
  }
}
