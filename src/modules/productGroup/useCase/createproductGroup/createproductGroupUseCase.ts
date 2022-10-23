import { productGroupRepository } from "../../Repositories/ProductGroupRepository";
import { Request } from 'express';


class createProductGroupUseCase {
    private productGroupRepository: productGroupRepository;

  constructor(ProductGroupRepository: productGroupRepository) {
    this.productGroupRepository = ProductGroupRepository;
  }

    execute(request: Request){
      
        const { name, id_parent, type } = request.body

      const verifyAlreadyExist = this.productGroupRepository.findbyname(name)

      if(verifyAlreadyExist){
        throw new Error("Product Group already exists!")
      }

      const createproductData = { name, id_parent, type }

      this.productGroupRepository.create(createproductData)
        
    }
}
export {createProductGroupUseCase}