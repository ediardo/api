module.exports = function(sequelize, DataTypes) {
  var Activity = sequelize.define(
    "Activity",
    {
      userId: {
        type: DataTypes.INTEGER
      },
      entityId: {
        type: DataTypes.INTEGER
      },
      entityTypeId: {
        type: DataTypes.STRING
      },
      entityActionId: {
        type: DataTypes.INTEGER
      },
      isPrivate: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      }
    },
    {
      timestamps: true
    }
  );

  Activity.associate = models => {
    Activity.belongsTo(models.EntityType, { foreignKey: "entityTypeId" });
    Activity.belongsTo(models.EntityAction, { foreignKey: "entityActionId" });
    Activity.belongsTo(models.User, { foreignKey: "userId" });
  };
  return Activity;
};
