import { verify } from 'jsonwebtoken'

export default async function userState() {

    let token = localStorage.getItem("token")

    const Result = {
        "UserState": null,
        "message": null
    }

    if (!token) {
        Result.UserState = false
        Result.message = 404
    }

    else {
        verify(token, process.env.SECRET_KEY, function (decoded, err) {
            if (err) {
                Result.UserState = false
                Result.message = 699
            }
            else if (decoded) {
                Result.UserState = true
                Result.message = 200
            }
        })
    }

    return Result;

}