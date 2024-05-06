import { Router, json, query } from "express";
import users from "../users.json" assert { type: "json" };
import cors from "cors"
import { jwtDecode } from "jwt-decode";

const router = Router()

router.use(cors())
router.use(json)

router.get("/api/login/user/", (req, res) => {

    const { email, password } = req.query;
    if(email,password){
        const {type,name} = users.find((user)=>user.email == email )
        res.json({type,name})
    }

    // if (!email || !password) {
    //     return res.status(400).json({ error: "Email and password are required" });
    // }

    // const user = users.find((user) => user.email === email && user.password === password);

    // if (user) {
    //     const { name, email ,type} = user;
    //     return res.json({ name, email,type });
    // } else {
    //     return res.send(false);
    // }

})
router.post("/api/login/user/", (req, res) => {

    // const { email, password } = req.query;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
        const { name, email ,type} = user;
        return res.json({ name, email,type });
    } else {
        return res.send(false);
    }

})


export default router