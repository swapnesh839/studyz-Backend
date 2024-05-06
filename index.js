import Express from "express"
import router from "./Routes/Routes.js";
const app = Express()

app.use(router)

app.listen(3000, () => {
    console.log("server running at port 3000");
})