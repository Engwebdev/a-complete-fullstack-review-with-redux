const getProducts = (req, res, next) => {
  const db = req.app.get('db');
  db.getProducts()
    .then(products => res.status(200).send(products))
    .catch(err => res.status(500).send({ getProductsError: err }));
};

const addProduct = (req, res, next) => {
  const { name, description, price, image_url } = req.body;
  const db = req.app.get('db');

  db.addProduct([name, description, price, image_url])
    .then(product => res.status(200).send(product))
    .catch(err => res.status(500).send({ addProductError: 'Bad Request' }));
};

module.exports = {
  getProducts,
  addProduct
};
