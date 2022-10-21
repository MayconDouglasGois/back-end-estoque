import express, { Router } from 'express'
import { BranchRoutes } from './Routes/BranchRoutes';
import { ProductGroupRoutes } from './Routes/productGroupRoutes';
 
const app = express();


app.use(express.json())

 
app.use("/branch",BranchRoutes)
app.use("/ProductGroup",ProductGroupRoutes)
 





 
 
app.listen(3333, () => 'server running on port 3333')


