import React from 'react';
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="list__pokemons">
        <img src={this.props.pokeImg} alt={this.props.pokeName} className="list__img" />
        <div className="type__box">
          <h2 className="list__name">{this.props.pokeName}</h2>
          <ol className="main-list__type">
            {this.props.pokeType.map((type, index) => {
              return (
                <li className="list__type" key={index}>{type}
                </li>
              );

            })}
          </ol>
        </div>
      </div>
    );
  }
}

Pokemon.propTypes = {
  Pokename: PropTypes.string.isRequired,
  PokeImg: PropTypes.string.isRequired
};

export default Pokemon; 