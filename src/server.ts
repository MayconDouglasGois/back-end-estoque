import express, { Router } from 'express'
import { BranchRoutes } from './Routes/BranchRoutes';
 
const app = express();


app.use(express.json())

 
app.use("/branch",BranchRoutes)
 





 
 
app.listen(3333, () => 'server running on port 3333')


