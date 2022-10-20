import { branchRepository } from "../../Repositories/BranchRepository";
import { Request } from "express";

class deleteBranchUseCase {
  private branchRepository: branchRepository;

  constructor(BranchRepository: branchRepository) {
    this.branchRepository = BranchRepository;
  }

  execute(request: Request) {
    
    const {id} = request.body;

    const verifyBranchCreated = this.branchRepository.findbyId(id)

    if(!verifyBranchCreated){
      throw new Error("Branch id no exist!")
    }

  
    this.branchRepository.delete(id)
  }
}
export { deleteBranchUseCase };
