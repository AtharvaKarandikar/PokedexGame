import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Pokedex from './pokedex';
class Pokegame extends Component{
    static defaultProps = {
        pokemon :[
        {id: 4, name: 'Charmander', type: 'fire', base_experience: 62},
        {id: 7, name: 'Squirtle', type: 'water', base_experience: 63},
        {id: 11, name: 'Metapod', type: 'bug', base_experience: 72},
        {id: 12, name: 'Butterfree', type: 'flying', base_experience: 178},
        {id: 25, name: 'Pikachu', type: 'electric', base_experience: 112},
        {id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95},
        {id: 94, name: 'Gengar', type: 'poison', base_experience: 225},
        {id: 133, name: 'Eevee', type: 'normal', base_experience: 65}]
    }
    render(){
        let hand_1 = []
        let hand_2 = [...this.props.pokemon]
        while(hand_1.length < hand_2.length){
            let randIndx = Math.floor(Math.random()*hand_2.length)
            let randPokemon = hand_2.splice(randIndx, 1)[0]
            hand_1.push(randPokemon)
        }
        let exp1 = hand_1.reduce((exp, pokemon)=>
            exp + pokemon.base_experience,0)
        let exp2 = hand_2.reduce((exp, pokemon)=>
            exp + pokemon.base_experience,0)
        return(
            <div className="Pokegame">
                <h1>PokeGame</h1>
                <Pokedex pokemon={hand_1} exp={exp1} isWinner={exp1>exp2}/>
                <Pokedex pokemon={hand_2} exp={exp2} isWinner={exp2>exp1}/>
                
            </div>
        )
    }
}
export default Pokegame