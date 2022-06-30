const { apiService } = require("../service/apiService");

module.exports = {
  async reposController(req, res) {
    try {
      const reposList = await apiService();

      return res.json({ reposList });

    } catch (error) {
      console.log(error)
    }

  }
}