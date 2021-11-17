import { useState, useEffect } from 'react'


const Home =() =>{

     const [state, setState] = useState(null)

     useEffect( () =>{
         fetch('https://pokeapi.co/api/v2/pokemon/1')
            .then(res => res.json())
            .then(data => setState(data))
     },[])
     console.log(state);
     if(state === null){
         return(<></>)
     }
     
     const handleButtonClick = () => {
         const numberContain = randomPokemon()
         fetch('https://pokeapi.co/api/v2/pokemon/'+numberContain)
            .then(res => res.json())
            .then(data => setState(data))
     }  
  
    const randomPokemon=() =>{
        const randomId=Math.floor(Math.random() * 151) + 1;
        return randomId
    }
    
    
    console.log(state.types);
    return (
        
        <div>
            <img src={state.sprites.front_default} alt="img" />
            <p>{state.name}</p>
            <p>{state.height}</p>
            <p>{state.weight}</p>
            <>{state.types.map( type =>(<p>type : {type.type.name}</p>))}</>
            <button  onClick={()=>handleButtonClick()}>Random Pokemon</button>
        </div>
    
        )
    
}

export default Home