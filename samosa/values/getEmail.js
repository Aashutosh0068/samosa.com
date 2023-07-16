import { SECRET_KEY } from "@/Keys";
import { verify } from "jsonwebtoken";

let Result = "";
export default function tokenUserI(token) {
  verify(token, SECRET_KEY.toString(), function (err, decoded) {
    if (decoded) {
      Result = decoded.email;
    }
    else{
      Result = err
    }
  });
  return Result;
}
