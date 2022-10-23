import {Router} from "express";
import { CreateProductGroupController } from "../modules/productGroup/useCase/createproductGroup";
import { EditProductGroupController } from "../modules/productGroup/useCase/editProductGroup";
import { ListProductGroupController } from "../modules/productGroup/useCase/listProductGroup";

const ProductGroupRoutes = Router();

ProductGroupRoutes.get("/", (req, res) => {
  ListProductGroupController.handle(req, res) 
});

ProductGroupRoutes.post("/", (req, res) => {
  
  CreateProductGroupController.handle(req, res);
});

ProductGroupRoutes.put("/", (req, res) => {
  EditProductGroupController.handle(req, res);
});

ProductGroupRoutes.delete("/", (req, res) => {
  // DeleteBranchController.handle(req, res);
});

export {ProductGroupRoutes}