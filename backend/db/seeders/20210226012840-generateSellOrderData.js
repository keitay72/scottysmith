"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("SellOrders", [
      {
        id: 1,
        userId: 1,
        symbol: "AAPL",
        price: 100.00,
        status: 'OPEN',
        isShared: 'False',
        quantity: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("SellOrders", null, {});
  },
};
