
module.exports = {
  up: async (queryInterface, Sequelize) => {
     await queryInterface.bulkInsert('Pessoas', [
      {
        nome: 'Yasmim Roza',
        ativo: true,
        email: 'yasmim@yasmim.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Claudia Ramalho',
        ativo: true,
        email: 'claudia@claudia.com',
        role: 'docente',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        nome: 'Victor Roza',
        ativo: false,
        email: 'vistor@victor.com',
        role: 'estudante',
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Pessoas', null, {});
  }
};
