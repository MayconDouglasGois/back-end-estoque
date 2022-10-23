import { editProductGroupUseCase } from "./editProductGroupUseCase";
import { Response, Request } from "express";

class editProductGroupController {
  private editProductGroupUseCase: editProductGroupUseCase;

  constructor(EditProductGroupUseCase: editProductGroupUseCase) {
    this.editProductGroupUseCase = EditProductGroupUseCase;
  }

  handle(request: Request, response: Response) {
    
    this.editProductGroupUseCase.execute(request);

    return response.status(200).send();
  }
}
export {editProductGroupController}
