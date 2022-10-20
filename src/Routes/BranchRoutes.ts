import {Router} from "express";
import { CreateBranchController } from "../modules/branch/useCase/createBranch";
import { DeleteBranchController } from "../modules/branch/useCase/deleteBranch";
import { EditBranchController } from "../modules/branch/useCase/editBranch";
import { ListBranchController } from "../modules/branch/useCase/listBranch";

const BranchRoutes = Router();

BranchRoutes.get("/", (req, res) => {
  ListBranchController.handle(req, res) 
});

BranchRoutes.post("/", (req, res) => {
  CreateBranchController.handle(req, res);
});

BranchRoutes.put("/", (req, res) => {
  EditBranchController.handle(req, res);
});

BranchRoutes.delete("/", (req, res) => {
  DeleteBranchController.handle(req, res);
});

export {BranchRoutes}