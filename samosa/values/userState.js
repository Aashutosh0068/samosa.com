import secret from '@/secret';
import { verify } from 'jsonwebtoken';

export default async function userState() {
    const Result = {
        userStatus: null,
        message: null,
        email: undefined,
        name: undefined
    }
    let token = localStorage.getItem("token")

    if (!token) {
        Result.userStatus = false
        Result.message = 404
    }

    else {
        verify(token, secret.secret.SECRET_KEY , async (err, decoded) => {
            if (decoded) {
                Result.email = decoded.email
                Result.name = decoded.name
                Result.message = 200
                Result.userStatus = true
            }
            else {
                if (err.message == 'jwt expired') {
                    Result.userStatus = false
                    Result.message = 690
                } else {
                    Result.userStatus = false
                    Result.message = 699;
                }
            }
        })

        /* if (!decoded) {
             Result.userStatus = false
             Result.message = 699
         }
         else if (decoded) {
             Result.userStatus = true
             Result.message = 200
         }*/
    }

    return Result;
}