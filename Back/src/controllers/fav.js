const {
  Favorite
} = require('../DB_connection');
//let fav = [];

const getFav = async (req, res) => {
try {
  const fav = await Favorite.findAll()
  if(fav === null) throw Error(`you don't Have favorites's characters`)
  res.status(200).json(fav);
  
} catch (error) {
  res.status(400).json({message: error.message})
}
};

const postFav = async (req, res) => {
  const newFav = await Favorite.findOrCreate({
    where: req.body
  })
  //fav.push(req.body);
  //console.log("log de favoritos add", fav);
  res.status(200).json(req.body);
};

// const deleteFav = (req, res) => {
//   const {
//     id
//   } = req.params;
//   const character = fav.find((f) => f.id === Number(id));

//   if (character) {
//     fav = fav.filter(f => f !== character)
//     console.log("log de favoritos delete", fav);
//     res.status(200).json(character);

//   } else {
//     res.status(400).json({
//       error: "not found this character",
//     });
//   }
// };

const deleteFav = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const findChar = await Favorite.findOne({where: {id:id}})
    const deleteChar = await Favorite.destroy({
      where: {
        id,
      }
    })
    
    if(findChar === null) throw Error("not found this character");
    res.status(200).send(`deleted this character's id ${id} successfully`)

  } catch (error) {
    res.status(400).json({
      error: error.message,
    });

  }

};


module.exports = {
  getFav,
  postFav,
  deleteFav,
};