import { ApiError } from "../utils/ApiError.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken"
import { User } from "../models/user.models.js";


export const verifyJWT = asyncHandler(async (req, _, next) => {
    try {
        console.log(req.header("Authorization"))
        const token = req.cookies?.accessToken || req.header("Authorization")?.replace("Bearer ", "")
        console.log("token is ",token)
        if (!token) {
            throw new ApiError(401, "Unauthorized request")
        }
        console.log("a")
        const decoderToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        console.log("a")

        const user = await User.findById(decoderToken?._id).select("-password -refreshToken")
        console.log("a")

        if (!user) {
            throw new ApiError(401, "Invalid Access Token")
        }
        console.log("a")

        req.user = user;
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || "Invalid access token")
    }
})

// export { verifyJWT }