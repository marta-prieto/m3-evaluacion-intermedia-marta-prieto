import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';


class PokeList extends React.Component {
  render() {
    return (
      <ol className="main-list">
        {this.props.pokemons.map(item => {
          return (
            <li className="list" key={item.id}>
              <Pokemon
                pokeName={item.name}
                pokeType={item.types}
                pokeImg={item.url}
              />
            </li>
          );

        })}

      </ol>
    );
  }
}

PokeList.propTypes = {
  pokemon: PropTypes.arrayOf(PropTypes.object),
};

export default PokeList;