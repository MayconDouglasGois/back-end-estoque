import { productGroupRepository } from "../../Repositories/ProductGroupRepository";
import { editProductGroupUseCase } from "./editProductGroupUseCase";
import { editProductGroupController } from "./editProductGroupController";

const ProductGroupRepository = productGroupRepository.getInstanse()

const EditProductGroupUseCase =  new editProductGroupUseCase(ProductGroupRepository)

const EditProductGroupController = new editProductGroupController(EditProductGroupUseCase)

export {EditProductGroupController}

