import { ProductGroup } from "../model/productGroup";
import { IProductRepository } from "./IProductRepository";

class productRepository implements IProductRepository {
  private static INTANSE: productRepository;

  private productGroup: ProductGroup[];

  private constructor() {
    this.productGroup = [];
  }
  public static getInstanse() {
    if (!productRepository.INTANSE) {
      productRepository.INTANSE = new productRepository();
    }
    return productRepository.INTANSE;
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

export { productRepository };
