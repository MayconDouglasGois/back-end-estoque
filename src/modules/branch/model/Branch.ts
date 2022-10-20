import {v4 as uuidv4} from 'uuid'

class Branch{
    id?: string;
    name: string;
    cnpj: string;
    telephone?: string;
    email?: string;
    status: string;
    note?: string;
    created_at: Date;


    constructor(){
        if(!this.id){
            this.id = uuidv4()
        }
    }
}
export {Branch}