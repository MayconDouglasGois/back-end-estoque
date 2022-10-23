import express from 'express'
import { BranchRoutes } from './Routes/BranchRoutes';
import { ProductGroupRoutes } from './Routes/productGroupRoutes';
import "./database"
 
const app = express();


app.use(express.json())

 
app.use("/branch",BranchRoutes)
app.use("/product-group",ProductGroupRoutes)
 





 
 
app.listen(3333, () => 'server running on port 3333')


