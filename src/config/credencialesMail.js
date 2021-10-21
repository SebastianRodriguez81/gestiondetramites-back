import dotenv from "dotenv";
dotenv.config();

function getAuth() {
    return {
        mail: process.env.EMAIL_AUTH,
        pass: process.env.PASS_AUTH,
    };
}

export default getAuth;
