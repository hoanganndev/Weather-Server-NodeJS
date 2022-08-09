import express from "express";
import homeController from "../controller/homeController";
import { checkUserJWT } from "../middleware/verifyToken";

const router = express.Router();

/**
 *
 * @param {*} app : express app
 */

const initApiRoutes = app => {
    router.all("*", checkUserJWT);
    router.get("/", (req, res) => {
        return res.status(200).json({
            code: 0,
            message: "ok",
        });
    });
    router.post("/get-weather-data", homeController.getWeatherData);
    return app.use("/weather-api/v1/", router);
};

export default initApiRoutes;
