import { branchRepository } from "../../Repositories/BranchRepository";
import { Request } from "express";

class editBranchUseCase {
  private branchRepository: branchRepository;

  constructor(BranchRepository: branchRepository) {
    this.branchRepository = BranchRepository;
  }

  execute(request: Request) {
    const { id, name, cnpj, telephone, email, status, note,created_at } = request.body;

    const verifyBranchCreated = this.branchRepository.findbyId(id)

    if(!verifyBranchCreated){
      throw new Error("Branch id no exist!")
    }

    const editBranchData = {
      id,
      name,
      cnpj,
      telephone,
      email,
      status,
      note,
      created_at
    };
    this.branchRepository.edict(editBranchData)
  }
}
export { editBranchUseCase };
