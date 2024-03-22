// ES
import { userRouter, express} from "./controller/userController.js";
import { productRouter } from "./controller/ProductController.js";
import { eventController } from "./controller/eventController.js";
import cookieParser from "cookie-parser";
import { errorHandling } from "./middleware/errorHandling.js";
import path from 'path'
import cors from 'cors'
import { config } from "dotenv";
config()

const app = express()
const port = +process.env.PORT || 7700
 
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Credintials", "true");
    res.header("Access-Control-Allow-Methods", "*");
    res.header("Access-Control-Request-Methods", "*");
    res.header("Access-Control-Allow-Headers", "*");
    res.header("Access-Control-Expose-Headers", "Authorization");
    next();
    
}) 
app.use(
    express.static('./static'),
    express.json(),
    express.urlencoded({
        extended: true,
    }),
    cookieParser(),
    cors()
)
// Router -- where you going , app get from which is the /
app.get('^/$|/CapstoneProject', (req, res)=>{
    res.status(200).sendFile(path.join(__dirname,'./static/index.html'))
})
app.use('/Users', userRouter)
app.use('/Products', productRouter)
app.use('/Events', eventController)
app.use(errorHandling)
app.listen(port, ()=>{
    console.log(`Server is running on port http://localhost:${port}`);
})