import React from 'react';

class Pokemon extends React.Component {
    render() {
        console.log(this.props);
        return (
            <div className="list__pokemons">
                <p>{this.props.pokeName}</p>
                <p>{this.props.pokeType}</p>
                <div onClick={this.props.getList}></div>
            </div>
        );
    }
}

export default Pokemon; 