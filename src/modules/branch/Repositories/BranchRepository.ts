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
  findbyId(id: string): Branch {
    const verifyAlreadyExist = this.branch.find(i => i.id === id)
    return verifyAlreadyExist
  }



  list(): Branch[] {
    const list = this.branch
    return list
  }
  edict({
    id,
    name,
    cnpj,
    telephone,
    email,
    status,
    note,
    created_at
  }): void {
    
    const data = new Branch
    const indexId = this.branch.findIndex(i => i.id === id)

    Object.assign(data,{
        id,
        name,
        cnpj,
        status,
        telephone,
        email,
        note,
        created_at
    })

    this.branch.splice(indexId,1,data)

  }
  delete(id: string): void {
    const indexId = this.branch.findIndex(i => i.id === id)
    this.branch.splice(indexId,1)
  }
}

export { branchRepository };
