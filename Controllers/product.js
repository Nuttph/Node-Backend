exports.read = async (req,res) => {
    res.send('Hello Controller Read')
}

exports.list = async (req, res) => {
    try {
        res.send('Hello list')
        res.status(200)
    } catch(err) {
        console.log(err)
        res.status(500).send('Server Error Naja')
    }
}

exports.create = async (req, res) => {
    try {
        res.send('Hello create')
    } catch(err) {
        console.log(err)
        res.status(500).send('Server Error Naja')
    }
}

exports.update = async (req, res) => {
    try {
        res.send('Hello update')
    } catch(err) {
        console.log(err)
        res.status(500).send('Server Error Naja')
    }
}

exports.remove = async (req, res) => {
    try {
        res.send('Hello delete')
    } catch(err) {
        console.log(err)
        res.status(500).send('Server Error Naja')
    }
}

