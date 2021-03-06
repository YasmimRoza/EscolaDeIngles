
module.exports = {
  up: async (queryInterface, Sequelize) => {

    await queryInterface.bulkInsert('Turmas', [
      {
        datainicio: "2020-02-01",
        nivel_id: 1,
        docente_id: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Turmas', null, {});
  }
};
