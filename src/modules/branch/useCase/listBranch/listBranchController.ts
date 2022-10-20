import { listBranchUseCase } from "./listBranchUseCase";
import { Response, Request } from "express";

class listBranchController {
  private ListBranchUseCase: listBranchUseCase;

  constructor(listBranchUseCase: listBranchUseCase) {
    this.ListBranchUseCase = listBranchUseCase;
  }

  handle(request: Request, response: Response) {
    const listBranch = this.ListBranchUseCase.execute();
    response.json(listBranch)

  }
}
export {listBranchController}