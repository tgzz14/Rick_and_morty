const axios = require('axios')
const {
    Character
  } = require('../DB_connection');
//const url = 'https://rickandmortyapi.com/api/character/'

// const getCharById = async (req, res) => {
//     try {
//     const {id} = req.params;
//     let result = await axios(url + id)
//     const { data } = result;
//             let objeto = {
//                 name : data.name,
//                 image: data.image,
//                 id: data.id,
//                 gender: data.gender,
//                 species: data.species
//             }
//             res.status(200)
//             res.json(objeto)
        
//     } catch (err) {
//         res.status(500)
//         res.json({message: err.message})
//     }
// }

const getCharById = async (req, res) => {
    try {
    const {id} = req.params;
    const character = await Character.findOne({
        where: {id: id}
    })

    if(character === null) {
        throw Error(`The character with id ${id} not exist`)
    }

            res.status(200).json(character)
        
    } catch (err) {
        res.status(500)
        res.json({message: err.message})
    }
}


module.exports = getCharById