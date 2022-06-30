const { apiService } = require("../service/index");

module.exports = {
  async getRepos() {
    try {
      const response = await apiService();

      const orderSortFilter = response
        .filter(repos => repos.language != null)
        .slice(0, 5)
        .map((item) => ({
          uri: item.owner.avatar_url,
          title: item.full_name,
          text: item.description,
          type: 'image/jpeg',
        }))

      return orderSortFilter;

    } catch (err) {
      console.log(err)
    }

  }
}