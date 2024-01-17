import sequelize from "../models/connect.js";
import  initModels  from '../models/init-models.js';

const conn = initModels(sequelize);

const getRestaurant = async (req, res) => {
    try {
        let data = await conn.restaurant.findAll();
        res.send(data);
    } catch (error) {
        console.log(`error: ${error}`);
    }
};

const getLike = async (req, res) => {
    try {
        let data = await conn.restaurant.findAll({
            include:['like_res']
        });
        res.send(data);
    } catch (error) {
        console.log(`error: ${error}`);
    }
};

const getRate = async (req, res)  => {
    try {
        let data = await conn.restaurant.findAll({
            include: ['rate_res']
        });
        res.send(data)
    } catch (error) {
        console.log(`Error: ${error}`);
    }
};

const getLikeByRestaurant = async (req, res) => {
    let {res_id} = req.query;
    try {
        let data = await conn.restaurant.findByPk(res_id,{
            include: ['like_res']
        });
        res.send(data)
    } catch (error) {
        console.log(`error: ${error}`);
    }
};

const getRateByRestaurant = async (req, res) => {
    let {res_id} = req.query;
    try {
        let data = await conn.restaurant.findByPk(res_id,{
            include: ['rate_res']
        });
        res.send(data)
    } catch (error) {
        console.log(`error: ${error}`);
    }
};

export {
    getRestaurant,
    getLike,
    getRate,
    getLikeByRestaurant,
    getRateByRestaurant
}