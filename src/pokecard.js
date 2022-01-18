import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './pokecard.css'
const HD_API = "https://assets.pokemon.com/assets/cms2/img/pokedex/detail/"
const POKE_API = " https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
function pad(input, length, padding)
{
  while((input = input.toString()).length + (padding = padding.toString()).length < length)
  {
    padding += padding;
  }
  return padding.substr(0, length - input.length) + input;
}
class Pokecard extends Component{
    render(){
        let imgSrc = HD_API + pad(this.props.id, 3, 0) + ".png";
        return (
            <div className='Pokecard'>
                 <img alt ="Pokemon_image" src = {imgSrc}/>
                <h2>{this.props.name}</h2>
                <div className='Pokecard-data'>
                    <p>type : {this.props.type}</p>
                    <p>experience : {this.props.exp}</p>
                </div>
               
            </div>
        )
    }
}
export default Pokecard