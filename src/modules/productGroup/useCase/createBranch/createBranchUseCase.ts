import { branchRepository } from "../../Repositories/BranchRepository";
import { Request } from 'express';


class createBranchUseCase {
    private branchRepository: branchRepository;

  constructor(BranchRepository: branchRepository) {
    this.branchRepository = BranchRepository;
  }

    execute(request: Request){
      
        const {name,cnpj,telephone,status,email,note} = request.body

      const verifyAlreadyExist = this.branchRepository.findbyname(name)

      if(verifyAlreadyExist){
        throw new Error("Branch already exists!")
      }

      const createBranchData = {
        name,
        cnpj,
        telephone,
        status,
        email,
        note
      }
      this.branchRepository.create(createBranchData)
        
    }
}
export {createBranchUseCase}