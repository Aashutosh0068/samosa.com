import { SECRET_KEY } from '@/Keys';
import { verify } from 'jsonwebtoken';
import { getCookie } from './cookie';

export default function userState() {
    const Result = {
        userStatus: null,
        message: null,
        email: undefined,
        name: undefined
    }
    let token = getCookie('token')

    if (!token) {
        Result.userStatus = false
        Result.message = 404
    }

    else {
        verify(token, SECRET_KEY.toString() , (err, decoded) => {
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