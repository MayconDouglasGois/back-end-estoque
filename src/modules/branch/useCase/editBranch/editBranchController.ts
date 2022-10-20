import { editBranchUseCase } from "./editBranchUseCase";
import { Response, Request } from "express";

class editBranchController {
  private editBranchUseCase: editBranchUseCase;

  constructor(EditBranchUseCase: editBranchUseCase) {
    this.editBranchUseCase = EditBranchUseCase;
  }

  handle(request: Request, response: Response) {
    
    this.editBranchUseCase.execute(request);

    return response.status(200).send();
  }
}
export {editBranchController}