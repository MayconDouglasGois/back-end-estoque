import { Branch } from "../model/Branch";
import { IBranchRepository } from "./IBranchRepository";

class branchRepository implements IBranchRepository {
  private static INTANSE: branchRepository;

  private branch: Branch[];

 private constructor() {
   this.branch = [];
  }
  public static getInstanse() {
    if (!branchRepository.INTANSE) {
      branchRepository.INTANSE = new branchRepository();
    }
    return branchRepository.INTANSE;
  }

  create({name,cnpj,telephone,status,email,note}): void {

    const data = new Branch

    Object.assign(data,{
        name,
        cnpj,
        status,
        telephone,
        email,
        note,
        created_at: new Date()
    })

    this.branch.push(data)

  }
  findbyname(name: string): Branch {
    const verifyAlreadyExist = this.branch.find(i => i.name === name)
    return verifyAlreadyExist
  }
  findIndex(id: string):number {
    const filterIndexById = this.branch.findIndex(i => i.id === id)
    return filterIndexById
  }
  list(): Branch[] {
    const list = this.branch
    return list
  }
  edict({
    indexId,
    id,
    name,
    cnpj,
    telephone,
    email,
    status,
    note
  }): void {
    
    const data = new Branch

    Object.assign(data,{
        name,
        cnpj,
        status,
        telephone,
        email,
        note,
        created_at: new Date()
    })

    this.branch.push(data)

  }
  delete(id: string): void {
    throw new Error("Method not implemented.");
  }
}

export { branchRepository };
