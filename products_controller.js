module.exports = {

  create(req, res) {
    const {name, description, price, image} = req.body
    const db = req.app.get("db")
    db.create_product({
      name: name,
      description: description,
      price: price,
      image: image
    })
    .then(result => res.status(200).send(result))
    .catch(err => console.log(err))
  },

getOne(req, res) {
  const db = req.app.get("db")
  db.read_product(+req.params.id)
  .then(results => {
    res.status(200).send(results)
  })
  .catch(err => console.log(err))
},

getAll(req, res) {
  const db = req.app.get("db")
  db.read_products()
  .then(results => res.status(200).send(results))
  .catch(err => {
    res.status(500).send('It is broken'), err
  })
},

update(req, res) {
  const db = req.app.get("db")
  db.update_product([+req.params.id, req.query.desc])
    .then(result => {
      res.status(200).send(result)
    })
    .catch(err => console.log(err))
},

delete(req, res) {
  const db = req.app.get('db')
  db.delete_product(+req.params.id)
  .then(results => res.status(200).send(results))
  .catch(err => console.log(err))
}

}