module.exports = {
  port: process.env.PORT || 4000,
  dbURI: process.env.MONGODB_URI || 'mongodb://localhost/wonders-api',
  darkskyApiKey: process.env.DARKSKY_API_KEY
};
