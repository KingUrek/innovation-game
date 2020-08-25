function combo(items) {
  function sequelize({ _id, name, schedule, products, description, price }) {
    const sequelizer = {
      id: _id,
      name,
      schedule,
      products,
      description,

    };

    if (typeof price === 'string') {
      sequelizer.price = price;
    } else {
      sequelizer.price = price.price;
      sequelizer.noPromotional = price.noPromotional;
    }
    return sequelizer;
  }
  return items.map(sequelize);
}

export default { combo };
