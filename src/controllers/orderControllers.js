import sequelize from "../models/connect.js";
import  initModels  from '../models/init-models.js';

const conn = initModels(sequelize);

const getOrder = async (req, res) => {
    try {
        let data = await conn.orders.findAll({
            include: ['user']
        });
        res.send(data);
    } catch (error) {
        console.log(`error: ${error}`);
    }
};

const addOrder = async (req, res) => {
    try {
        let { user_id, food_id, amount, code, arr_sub_id } = req.body;
        let newOrder = {
            user_id,
            food_id,
            amount,
            code,
            arr_sub_id
        };
        await conn.orders.create(newOrder);
        res.send(`add order successfully`)
    } catch (error) {
        console.log(`error: ${error}`);
    }
};

export {
    getOrder,
    addOrder
}