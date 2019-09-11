import React from 'react';
import PropTypes from 'prop-types';
import Pokemon from './Pokemon';


class PokeList extends React.Component {
    render() {
        return (
            <ul className="main-list">
                {this.props.pokemos.map(item=> {
                    return (
                        <li className="list" key={item.name}>
                            <Pokemon 
                            pokeName={this.name}
                            pokeType={this.types}
                            pokeImg={this.url}/>
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