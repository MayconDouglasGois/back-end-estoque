import {Router} from "express";

const ProductGroupRoutes = Router();

ProductGroupRoutes.get("/", (req, res) => {
  // ListBranchController.handle(req, res) 
});

ProductGroupRoutes.post("/", (req, res) => {
  // CreateBranchController.handle(req, res);
});

ProductGroupRoutes.put("/", (req, res) => {
  // EditBranchController.handle(req, res);
});

ProductGroupRoutes.delete("/", (req, res) => {
  // DeleteBranchController.handle(req, res);
});

export {ProductGroupRoutes}