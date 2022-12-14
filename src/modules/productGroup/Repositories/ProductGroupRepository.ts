
import { ProductGroup } from "../model/ProductGroup";
import { IProductGroupRepository } from "./IProductGroupRepositoryRepository";

class productGroupRepository implements IProductGroupRepository {
  private static INTANSE: productGroupRepository;

  private productGroup: ProductGroup[];

  private constructor() {
    this.productGroup = [];
  }
  public static getInstanse() {
    if (!productGroupRepository.INTANSE) {
      productGroupRepository.INTANSE = new productGroupRepository();
    }
    return productGroupRepository.INTANSE;
  }

  create({ name, id_parent, type }): void {
    const data = new ProductGroup();

    Object.assign(data, {
      name,
      id_parent,
      type,
      created_at: new Date(),
    });

    this.productGroup.push(data);
  }
  findbyname(name: string): ProductGroup {
    const verifyAlreadyExist = this.productGroup.find((i) => i.name === name);
    return verifyAlreadyExist;
  }
  findbyId(id: string): ProductGroup {
    const verifyAlreadyExist = this.productGroup.find((i) => i.id === id);
    return verifyAlreadyExist;
  }

  list(): ProductGroup[] {
    const list = this.productGroup;
    return list;
  }
  edict({ id, name, id_parent, type, created_at }): void {
    const data = new ProductGroup();
    const indexId = this.productGroup.findIndex((i) => i.id === id);

    Object.assign(data, {
      id,
      name,
      id_parent,
      type,
      created_at,
    });

    this.productGroup.splice(indexId, 1, data);
  }
  delete(id: string): void {
    const indexId = this.productGroup.findIndex((i) => i.id === id);
    this.productGroup.splice(indexId, 1);
  }
}

export { productGroupRepository };
