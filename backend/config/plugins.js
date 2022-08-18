module.exports = ({ env }) => ({
  graphql: {
    enabled: true,
    shadowCRUD: false,
    config: {
      playgroundAlways: false,
      defaultLimit: 50
    }
  }
});
