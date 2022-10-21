import { branchRepository } from "../../Repositories/BranchRepository";
import { listBranchUseCase } from "./listBranchUseCase";
import { listBranchController } from "./listBranchController";

const BranchRepository = branchRepository.getInstanse()

const ListBranchUseCase =  new listBranchUseCase(BranchRepository)

const ListBranchController = new listBranchController(ListBranchUseCase)

export {ListBranchController}