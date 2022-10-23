import { productGroupRepository } from "../../Repositories/ProductGroupRepository";


class listProductGroupUseCase {
    private productGroupRepository: productGroupRepository;

  constructor(ProductGroupRepository: productGroupRepository) {
    this.productGroupRepository = ProductGroupRepository;
  }

    execute(){
      const listProductGroup = this.productGroupRepository.list()
      return listProductGroup
    }
}
export {listProductGroupUseCase}