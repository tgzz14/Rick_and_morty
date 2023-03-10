const { Character } = require('../DB_connection');

const getAllChars = async (req, res) => {
    try {
        let allChars = await Character.findAll({
            order: [['id', 'ASC']]
        })

        return res.status(200).json(allChars); 
        
    } catch (error) {
        return res.status(404).json({error : error.message})
    }
}

module.exports = getAllChars;
