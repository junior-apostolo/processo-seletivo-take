const { apiService } = require("../service/apiService");

module.exports = {
  async reposController(req, res) {
    try {
      const reposList = await apiService();

      return res.status(200).json({ reposList });

    } catch (error) {
      console.log(error)
      return res.status(500).json({ error: "Erro interno" })
    }

  }
}