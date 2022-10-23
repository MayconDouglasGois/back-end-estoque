import { productGroupRepository } from "../../Repositories/ProductGroupRepository";
import { Request } from "express";

class editProductGroupUseCase {
  private productGroupRepository: productGroupRepository;

  constructor(ProductGroupRepository: productGroupRepository) {
    this.productGroupRepository = ProductGroupRepository;
  }

  execute(request: Request) {
    const {id,name,id_parent,type,created_at} = request.body;

    const verifyBranchCreated = this.productGroupRepository.findbyId(id)

    if(!verifyBranchCreated){
      throw new Error("Product Group id no exist!")
    }

    const editBranchData = {
      id,
      name,
      id_parent,
      type,
      created_at,
    }
    this.productGroupRepository.edict(editBranchData)
  }
}
export { editProductGroupUseCase };
