import { productGroupRepository } from "../../Repositories/ProductGroupRepository"
import { listProductGroupController } from "./listProductGroupController"
import { listProductGroupUseCase } from "./listProductGroupUseCase"

const ProductGroupRepository = productGroupRepository.getInstanse()

const ListProductGroupUseCase =  new listProductGroupUseCase(ProductGroupRepository)

const ListProductGroupController = new listProductGroupController(ListProductGroupUseCase)

export {ListProductGroupController}