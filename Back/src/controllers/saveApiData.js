const axios = require('axios');
const { Character } = require('../DB_connection');

const getApiData = async () => {
    try {   
        let url = 'https://rickandmortyapi.com/api/character/'
        let page = 0;
        let arr = [];

        while(page < 5){
            let {data} = await axios.get(url);
            let {info, results} = data;
            results.forEach(character => {
                arr = [...arr,{
                    id: character.id,
                    name: character.name,
                    status: character.status,
                    specie: character.species,
                    gender: character.gender,
                    origin: character.origin.name,
                    image: character.image
                }]   
            });
            url = info.next 
            page++
        }
        //console.log(arr)
        return arr;
    } catch (error) {
        return error.message
    }
}

const saveApiData = async () => {
try {
    let characters = await getApiData(); 
    //bulkCreate te crea una tabla con la info de un array de objetos
    //await Character.bulkCreate(characters);
    characters.map( async (char) => { // char {id, name, status, specie, gender, origin, image}
           const chars = await Character.findOrCreate({
                where: char
            })
    })

    //console.log(created)
    return characters
} catch (error) {
    return error.message
}
}
module.exports = saveApiData;
