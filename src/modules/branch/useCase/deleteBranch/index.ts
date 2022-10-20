import { branchRepository } from "../../Repositories/BranchRepository";
import { deleteBranchUseCase } from "./deleteBranchUseCase";
import { deleteBranchController } from "./deleteBranchController";

const BranchRepository = branchRepository.getInstanse()

const DeleteBranchUseCase =  new deleteBranchUseCase(BranchRepository)

const DeleteBranchController = new deleteBranchController(DeleteBranchUseCase)

export {DeleteBranchController}