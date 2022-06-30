const { getRepos } = require("../model");

module.exports = {
  async reposController(req, res) {
    try {
      const apiResponse = await getRepos();

      return res.json({
        itemType: 'application/vnd.lime.document-select+json',
        items: apiResponse,
      });

    } catch (error) {
      console.log(error)
    }

  }
}