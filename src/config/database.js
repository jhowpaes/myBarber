module.exports = {
  dialect: 'postgress',
  host: 'localhost',
  username: 'docker',
  password: 'docker',
  database: 'mybarber',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
