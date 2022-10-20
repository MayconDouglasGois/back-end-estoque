import { branchRepository } from "../../Repositories/BranchRepository";
import { Request } from "express";

class editBranchUseCase {
  private branchRepository: branchRepository;

  constructor(BranchRepository: branchRepository) {
    this.branchRepository = BranchRepository;
  }

  execute(request: Request) {
    const { id, name, cnpj, telephone, email, status, note } = request.body;

    const indexId = this.branchRepository.findIndex(id);

    const editBranchData = {
      indexId,
      id,
      name,
      cnpj,
      telephone,
      email,
      status,
      note,
    };
    this.branchRepository.edict(editBranchData)
  }
}
export { editBranchUseCase };
