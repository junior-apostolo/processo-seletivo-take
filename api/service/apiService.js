const axios = require("axios");
const urlConfig = require("../config/settings");
const { getRepos } = require("../model/repos")

module.exports = {

  async apiService(req, res) {
    const response = await axios.get(urlConfig)
      .then((response) => response.data)
      .catch((err) => {
        const { status, message } = err;
        res.status(status).json({ message });
      })

    const result = getRepos(response);

    return result;
  }
}