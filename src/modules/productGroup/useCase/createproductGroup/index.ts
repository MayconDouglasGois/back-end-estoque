import { productGroupRepository } from "../../Repositories/ProductGroupRepository"
import { createProductGroupController } from "./createproductGroupController"
import { createProductGroupUseCase } from "./createproductGroupUseCase"

const ProductGroupRepository = productGroupRepository.getInstanse()

const CreateProductGroupUseCase =  new createProductGroupUseCase(ProductGroupRepository)

const CreateProductGroupController = new createProductGroupController(CreateProductGroupUseCase)

export {CreateProductGroupController}
