import { instance } from "../server.js";

export const controllerproduct = async (req, res) => {
    try {

        const options = {
            amount: Number(1000 * 100),
            currency: "INR",
        };

        const order = await instance.orders.create(options);

        res.status(200).json({
            success: true,
            order
        });

    } catch (error) {

        res.status(400).json({
            msg: "Controller product failed"
        });

    }
};


export const getKey = async (req, res) => {
    res.status(200).json({
        key: process.env.RAZOR_API_KEY,
    });
};