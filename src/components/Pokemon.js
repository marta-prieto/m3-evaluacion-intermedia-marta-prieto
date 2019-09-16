import React from 'react';

class Pokemon extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div className="list__pokemons">
        <img src={this.props.pokeImg} alt={this.props.pokeName} className="list__img"/>
        <div>
          <p className="list__name">{this.props.pokeName}</p>
          <ul className="main-list__type">
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