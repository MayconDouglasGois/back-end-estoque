import { branchRepository } from "../../Repositories/BranchRepository";


class listBranchUseCase {
    private branchRepository: branchRepository;

  constructor(BranchRepository: branchRepository) {
    this.branchRepository = BranchRepository;
  }

    execute(){
      const list = this.branchRepository.list()
      return list
    }
}
export {listBranchUseCase}