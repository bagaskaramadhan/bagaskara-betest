const userDataEntity = require('../entity/userData')
module.exports = userData = {
    getUserData: async (req, res) => {
        try {
            const userData = await userDataEntity.find({});
            res.status(200).send(userData)
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    },
    getUserDataById: async (req, res) => {
        try {
            const { id } = req.params;
            const userDataById = await userDataEntity.findById(id)
            // console.log(userDataById)
            res.status(200).send(userDataById)
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    },
    postUserData: async (req, res) => {
        try {
            const body = req.body
            // body.id = new mongoose.Types.ObjectId()
            if (typeof body.accountNumber !== 'string' || typeof body.identityNumber !== 'string') {
                return res.status(400).send({ message: "accountNumber and identityNumber must be string" })
            }
            await userDataEntity.create(body)
            res.sendStatus(200)
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    },
    putUserData: async (req, res) => {
        try {
            const { id } = req.params;
            const body = req.body;
            await userDataEntity.findByIdAndUpdate(id, body);
            res.sendStatus(200);
        } catch (err) {
            console.log(err.message)
        }
    },
    deleteUserData: async (req, res) => {
        try {
            const { id } = req.params;
            await userDataEntity.findByIdAndDelete(id)
            res.sendStatus(200);
        } catch (err) {
            console.log(err.message)
        }
    },
    getUserDataByAccountNumber: async (req, res) => {
        try {
            const { id } = req.params;
            const userDataByAccountNumber = await userDataEntity.findOne({ accountNumber: id })
            if (!userDataByAccountNumber) {
                return res.status(404).send({ message: "cannot find account number" })
            }
            res.status(200).send(userDataByAccountNumber)
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    },
    getUserDataByIdentityNumber: async (req, res) => {
        try {
            const { id } = req.params;
            const userDataByIdentityNumber = await userDataEntity.findOne({ identityNumber: id })
            if (!userDataByIdentityNumber) {
                return res.status(404).send({ message: "cannot find identity number" })
            }
            res.status(200).send(userDataByIdentityNumber)
        } catch (err) {
            res.status(400).json({ message: err.message })
        }
    }
}
