module.exports = (sequelize, Sequelize) => {
  const Word = sequelize.define("word", {
    wordletter: {
      type: Sequelize.STRING
    }
  });

  return Word;
};
