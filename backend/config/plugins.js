module.exports = ({ env }) => ({
  graphql: {
    enabled: true,
    shadowCRUD: false,
    config: {
      cd: false,
      defaultLimit: 50
    }
  }
});
