const axios = require('axios').default;

const getDetail = async (req, res) => {
  try {
    const data = await axios.get("https://api.thecatapi.com/v1/images/search?breed_id=" + req.params.id)
    res.status(200).json(data.data)
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: error.message })
  }
}
module.exports = getDetail;