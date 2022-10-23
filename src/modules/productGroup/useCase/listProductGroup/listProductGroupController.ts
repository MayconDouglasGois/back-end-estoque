import { listProductGroupUseCase } from "./listProductGroupUseCase";
import { Response, Request } from "express";

class listProductGroupController {
  private listProductGroupUseCase: listProductGroupUseCase;

  constructor(ListProductGroupUseCase: listProductGroupUseCase) {
    this.listProductGroupUseCase = ListProductGroupUseCase;
  }

  handle(request: Request, response: Response) {
    const listProductGroup = this.listProductGroupUseCase.execute();
    response.json(listProductGroup)

  }
}
export {listProductGroupController}