import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';


class PokeList extends React.Component {
  render() {
    return (
      <ul className="main-list">
        {this.props.pokemons.map((item, index) => {
          return (
            <li className="list" key={index}>{item.name}
              <Pokemon
                pokeName={item.name}
                pokeType={item.types}
                pokeImg={item.url}
              />
            </li>
          );

        })}

      </ul>
    );
  }
}

PokeList.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.object),
};

export default PokeList;