import React from 'react';

class Pokemon extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className="list__pokemons">
                <p className="list__name">{this.props.pokeName}</p>
                <p className="list__type">{this.props.pokeType}</p>
                <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png" className="list__img">{this.props.pokeImg}</img>   
            </div>
        );
    }
}

export default Pokemon; 