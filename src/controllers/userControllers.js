import sequelize from "../models/connect.js";
import  initModels  from '../models/init-models.js';

const conn = initModels(sequelize);

const getUser = async (req, res) => {
    try {
        let data = await conn.users.findAll();
        res.send(data);
    } catch (error) {
        console.log(`error: ${error}`);
    }
};

const getLike = async (req, res) => {
    try {
        let data = await conn.users.findAll({
            include:['like_res']
        });
        res.send(data);
    } catch (error) {
        console.log(`error: ${error}`);
    }
};

const getRate = async (req, res)  => {
    try {
        let data = await conn.users.findAll({
            include: ['rate_res']
        });
        res.send(data)
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

const getLikeByUser = async (req, res) => {
    let {user_id} = req.query;
    try {
        let data = await conn.users.findByPk(user_id,{
            include: ['like_res']
        });
        res.send(data)
    } catch (error) {
        console.log(`error: ${error}`);
    }
};

const getRateByUser = async (req, res) => {
    let {user_id} = req.query;
    try {
        let data = await conn.users.findByPk(user_id,{
            include: ['rate_res']
        });
        res.send(data)
    } catch (error) {
        console.log(`error: ${error}`);
    }
};

const getOrder = async (req, res) => {
    try {
        let data = await conn.users.findAll({
            include: ['orders']
        });
        res.send(data)
    } catch (error) {
        console.log(`error: ${error}`);
    }
}

export {
    getUser,
    getLike,
    getRate,
    getLikeByUser,
    getRateByUser,
    getOrder
}