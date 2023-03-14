import { verify } from 'jsonwebtoken'

export default function userState() {
    const Result = {
        userStatus: null,
        message: null
    }
    let token = localStorage.getItem("token")

    if (!token) {
        Result.userStatus = false
        Result.message = 404
    }

    else {
        verify(token, process.env.SECRET_KEY, function (decoded, err) {
            if (err) {
                Result.userStatus = false
                Result.message = 699
            }
            else if (decoded) {
                Result.userStatus = true
                Result.message = 200
            }
        })
    }

    return JSON.stringify(Result);
}