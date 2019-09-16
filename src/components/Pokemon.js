import React from 'react';

class Pokemon extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="list__pokemons">
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" alt={this.props.name} className="list__img">{this.props.pokeImg}</img>
        <div>
          <p className="list__name">{this.props.pokeName}</p>
          <ul className="list__type">
            {this.props.pokeType.map((type, index) => {
              return (
                <li className="list__type" key={index}>{type}
                </li>
              );

            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default Pokemon; 