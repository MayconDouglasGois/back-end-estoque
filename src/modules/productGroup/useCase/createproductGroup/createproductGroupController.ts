import { Response, Request } from "express";
import { createProductGroupUseCase } from "./createproductGroupUseCase";

class createProductGroupController {
  private createProductGroupUseCase: createProductGroupUseCase;

  constructor(CreateProductGroupUseCase: createProductGroupUseCase) {
    this.createProductGroupUseCase = CreateProductGroupUseCase;
  }

  handle(request: Request, response: Response) {
    
    this.createProductGroupUseCase.execute(request);

    return response.status(201).send();
  }
}
export {createProductGroupController}