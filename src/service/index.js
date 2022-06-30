const axios = require("axios");
const urlConfig = require("../config/settings");

module.exports = {

  async apiService(req, res) {
    const result = await axios.get(urlConfig)
      .then((response) => response.data)
      .catch((err) => {
        const { status, message } = err;
        res.status(status).json({ message });
      })
    
    return result;
  }
}