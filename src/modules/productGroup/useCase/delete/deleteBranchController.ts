import { deleteBranchUseCase } from "./deleteBranchUseCase";
import { Response, Request } from "express";

class deleteBranchController {
  private deleteBranchUseCase: deleteBranchUseCase;

  constructor(DeleteBranchUseCase: deleteBranchUseCase) {
    this.deleteBranchUseCase = DeleteBranchUseCase;
  }

  handle(request: Request, response: Response) {
    
    this.deleteBranchUseCase.execute(request);

    return response.status(200).send();
  }
}
export {deleteBranchController}