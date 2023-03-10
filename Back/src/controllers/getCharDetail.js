//const axios = require('axios')
//const url = 'https://rickandmortyapi.com/api/character/'
const {
    Character
  } = require('../DB_connection');

// const getCharDetail = async (req, res) => {
//     try {
//         const {detailId} = req.params
//         let result = await axios(url + detailId);
//         let { data } = result;
//         let objeto = {
//             name : data.name,
//             image: data.image,
//             id: data.id,
//             gender: data.gender,
//             species: data.species,
//             status: data.status,
//             origin: data.origin
//         }
//         res.status(200);
//         res.json(objeto)
//     } catch (err) {
//         res.status(500)
//         res.json({ message: err.message})
//     }
// }  

const getCharDetail = async (req, res) => {
    try {
        const {detailId} = req.params
        let detailChar = await Character.findOne({where: {id: detailId}});

        if(detailChar === null) throw Error('Not found');
        res.status(200).json(detailChar)

    } catch (err) {
        res.status(500)
        res.json({ message: err.message})
    }
} 
    
module.exports =  getCharDetail