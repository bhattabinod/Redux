import { buyBook } from "../constants";

export const purchaseBook =(data) =>{
    return {
        type: buyBook,
    }

}