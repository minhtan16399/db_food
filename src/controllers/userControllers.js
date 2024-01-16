import sequelize from "../models/connect.js";
import initModels from '../models/init-models.js';

const conn = initModels(sequelize);

const getUser = async (req, res) => {
    try {
        let data = await conn.users.findAll();
        res.send(data);
    } catch (error) {
        console.log(`error: ${error}`);
    }
};

export {
    getUser
}