import { ProductGroup } from "../model/ProductGroup";


interface IcreateProductGroupDTO{
  name: string;
  id_parent?: string;
  type: string;
}

interface IedictProductGroupDTO{
  id?: string;
  name: string;
  id_parent?: string;
  type: string;
}


interface IProductGroupRepository{
   
create({
    name,
    id_parent,
    type,
  }:IcreateProductGroupDTO):void;

findbyname(name: string):ProductGroup;

findbyId(id: string): ProductGroup


list():ProductGroup[];

edict( {
  id,
  name,
  id_parent,
  type,
}:IedictProductGroupDTO):void

delete(id: string):void
}
export {IProductGroupRepository,IcreateProductGroupDTO,IedictProductGroupDTO }