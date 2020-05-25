  const {
      Product
  } = require('../models/products_model.js')

  module.exports = {
      showProducts: (req, res) => {
          Product.find()
              .then(data => {
                  res.json({
                      message: "Success!",
                      data
                  })
              })
              .catch(err => {
                  res.json({
                      message: "Error!",
                      err
                  })
              })
      },

      createProduct: function (req, res) {
          Product.create({
              name: req.body.name,
              qty: req.body.qty,
              price: req.body.price,
          }, function (err, data) {
              if (err) {
                  res.json({
                      message: "Error!",
                      error: err,
                  });
              } else {
                  res.json({
                      message: "Success!",
                      added: true,
                      data: data
                  });
              }
          })
      },

      oneProduct: (req, res) => {
          Product.find({
                  _id: req.params.id,
              })
              .then(product_data => {
                  res.json(product_data)
              })
              .catch(err => {
                  res.json(err)
              })
      },


      editProduct: (req, res) => {
          let id = req.params.id;
          Product.findById(id, function (err, product_data) {
              if (err) {
                  res.json({
                      message: "Error!",
                      error: err
                  });
              } else {
                  if (req.body.name) {
                      product_data.name = req.body.name;
                  }
                  if (req.body.qty) {
                      product_data.qty = req.body.qty;
                  }
                  if (req.body.price) {
                      product_data.price = req.body.price;
                  }
                  product_data.save(function (err) {
                      if (err) {
                          res.json({
                              message: "Error when saving!",
                              error: err
                          });
                      } else {
                          res.json({
                              message: "Success!",
                              product_data: product_data
                          })
                      }
                  })
              }
          })
      },
      deleteProduct: (req, res) => {
          Product.remove({
              _id: req.params.id
          }, err => {
              if (err) {
                  res.json({
                      message: "Error!",
                      error: err
                  });
              } else {
                  res.json({
                      message: "Delete Success!",
                      added: true
                  });
              }
          })
      }
  }