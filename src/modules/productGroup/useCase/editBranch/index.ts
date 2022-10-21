import { branchRepository } from "../../Repositories/BranchRepository";
import { editBranchUseCase } from "./editBranchUseCase";
import { editBranchController } from "./editBranchController";

const BranchRepository = branchRepository.getInstanse()

const EditBranchUseCase =  new editBranchUseCase(BranchRepository)

const EditBranchController = new editBranchController(EditBranchUseCase)

export {EditBranchController}