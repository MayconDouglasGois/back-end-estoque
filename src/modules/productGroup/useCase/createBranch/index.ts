import { branchRepository } from "../../Repositories/BranchRepository";
import { createBranchUseCase } from "./createBranchUseCase";
import { createBranchController } from "./createBranchController";

const BranchRepository = branchRepository.getInstanse()

const CreateBranchUseCase =  new createBranchUseCase(BranchRepository)

const CreateBranchController = new createBranchController(CreateBranchUseCase)

export {CreateBranchController}