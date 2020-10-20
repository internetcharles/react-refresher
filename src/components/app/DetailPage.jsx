import React, { Component } from 'react';
import { getCharacterById } from '../../services/hey-arnold-api';
import PropTypes from 'prop-types';

export default class DetailPage extends Component {
  static propTypes = {
    character: PropTypes.object.isRequired,
    match: PropTypes.shape({
      params: PropTypes.shape({
        myCharacterId: PropTypes.string.isRequired
      })
    })
  };

  state = { character: '' }

  componentDidMount = async() => {
    const characterId = this.props.match.params.myCharacterId;
    await getCharacterById(characterId)
      .then(character => this.setState({ character }));
  }

  render() {
    const { character } = this.state;

    return (
      <div>
        <h1>{character.name}</h1>
        <img src={character.image} />    
      </div>
    );
  }
}
