module.exports = {
  dialect: 'postgres',
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
