import weatherService from "../service/weatherService";

let getWeatherData = async (req, res) => {
    try {
        let url = req.body.url;
        if (!url) {
            return res.status(200).json({
                message: "Missing URL params...",
            });
        }

        let data = await weatherService.getWeatherDataService(url);

        // let data = await axios.get(url);
        return res.status(200).json({
            ...data,
        });
    } catch (e) {
        return res.status(500).json({
            message: "Something wrong...",
            detail: JSON.stringify(e.message),
        });
    }
};

module.exports = {
    getWeatherData,
};
