const axios = require('axios').default;

const getBreed = async (req, res) => {
  try {
    const data = await axios.get("https://api.thecatapi.com/v1/breeds")
    const temp = {}
    const home = []
    for (let i = 0; i < 4; i++) {
      home.push(data.data[Math.floor(Math.random() * 70)])
    }
    temp["bredds"] = data.data.map(x => { return { name: x.name, id: x.id } })
    temp["random"] = home.map(x => { return { name: x.name, id: x.id, img: { id: x.image.id, url: x.image.url } } })
    res.status(200).json(temp)
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message })
  }
}
module.exports = getBreed;