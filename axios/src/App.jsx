
import  { useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
    
    const [pokemonList, setPokemonList] = useState([]);

    
    useEffect(() => {
        axios.get('https://pokeapi.co/api/v2/pokemon?limit=151')
            .then(response => {
                
                setPokemonList(response.data.results);
            })
            .catch(error => {
                console.error("Error fetching Pokémon:", error);
            });
    }, []); 

    return (
        <div style={{ padding: "20px" }}>
            <h1>First 151 Pokémon</h1>
            <ul>
                {pokemonList.map((pokemon, index) => (
                    <li key={index}>{pokemon.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default App;

