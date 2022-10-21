import { Branch } from "../model/Branch";

interface IcreateBranchDTO{
  name: string,
  cnpj: string,
  status: string,
  telephone?: string,
  email?: string,
  note?: string,
}

interface IedictBranchDTO{
  name: string,
  cnpj: string,
  status: string,
  telephone?: string,
  email?: string,
  note?: string,
  id?: string,
}


interface IBranchRepository{
   
  create({
    name,
    cnpj,
    telephone,
    status,
    email,
    note
  }:IcreateBranchDTO):void;

findbyname(name: string):Branch;


list():Branch[];
edict( {
  id,
  name,
  cnpj,
  telephone,
  email,
  status,
  note
}: IedictBranchDTO):void
delete(id: string):void
}
export {IBranchRepository, IcreateBranchDTO,IedictBranchDTO }