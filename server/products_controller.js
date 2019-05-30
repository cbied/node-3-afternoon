

const create = (req,res) => {
    const { name, description, price, image_url } = req.body,
            db = req.app.get('db');

    db.create_product([ name, description, price, image_url ])
        .then(() => res.sendStatus(200))
        .catch(error => {
            res.status(500).send('error found') 
            console.log(error)
        });
}

const getOne = (req,res) => {
    const db = req.app.get('db');

    db.read_product(req.params.id)
        .then(response => {
            console.log(response)
            res.status(200).send(response)
        })
        .catch(error => {
            res.status(500).send('error found') 
            console.log(error)
        });
}

const getAll = (req,res) => {
    const db = req.app.get('db')

    db.read_products()
        .then(response => res.status(200).send(response))
        .catch(error => {
            res.status(500).send('error found') 
            console.log(error)
        });
}

const update = (req,res) => {
    const db = req.app.get('db');
        

    db.update_product(req.params.id, req.query.desc)
        .then(() => res.sendStatus(200))
        .catch(error => {
            res.status(500).send('error found') 
            console.log(error)
        });
}

const deleteProduct = (req,res) => {
    const db = req.app.get('db')
        
    db.delete_product(req.params.id)
        .then(() => res.sendStatus(200))
        .catch(error => {
            res.status(500).send('error found') 
            console.log(error)
        });
}

module.exports = {
    create,
    getOne,
    getAll,
    update,
    deleteProduct
}

