import "dotenv/config";
import axios from "axios";
const nonSecurePaths = ["/"];

const extractToken = req => {
    if (
        req.headers.authorization &&
        req.headers.authorization.split(" ")[0] === "Bearer"
    ) {
        return req.headers.authorization.split(" ")[1];
    }
    return null;
};

const checkUserJWT = async (req, res, next) => {
    try {
        if (nonSecurePaths.includes(req.path)) return next();
        let tokenFromHeader = extractToken(req);
        if (tokenFromHeader) {
            let access_token = tokenFromHeader;
            axios.defaults.headers.common[
                "Authorization"
            ] = `Bearer ${access_token}`;
            // Call SSO to verify token
            let res = await axios.get(process.env.API_SSO_VERIFY_ACCESS_TOKEN);
            if (res && res.data && +res.data.errorCode === 0) {
                next();
            } else {
                return res.status(401).json({
                    EC: -1,
                    DT: "",
                    EM: "Not authenticated the user",
                });
            }
        } else {
            return res.status(400).json({
                EC: -1,
                DT: "",
                EM: "Not provide auth header token",
            });
        }
    } catch (error) {
        console.log(error);
    }
};

module.exports = {
    checkUserJWT,
};
