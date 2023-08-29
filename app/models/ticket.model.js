module.exports = (sequelize, DataTypes) => {
    const Ticket = sequelize.define("tickets", {    
      userId: {
        type: DataTypes.BIGINT
      },
      title: {
        type: DataTypes.STRING
      },
      description: {
        type: DataTypes.STRING
      },
      status: {
        type: DataTypes.STRING
      },

    });
  
    return Ticket;
  };