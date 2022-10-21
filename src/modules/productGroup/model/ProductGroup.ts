import {v4 as uuidv4} from 'uuid'

class ProductGroup{
    id?: string;
    name: string;
    id_parent?: string;
    type: string;


    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }
}
export {ProductGroup}