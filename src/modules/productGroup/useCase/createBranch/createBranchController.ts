import { createBranchUseCase } from "./createBranchUseCase";
import { Response, Request } from "express";

class createBranchController {
  private createBranchUseCase: createBranchUseCase;

  constructor(CreateBranchUseCase: createBranchUseCase) {
    this.createBranchUseCase = CreateBranchUseCase;
  }

  handle(request: Request, response: Response) {
    
    this.createBranchUseCase.execute(request);

    return response.status(201).send();
  }
}
export {createBranchController}