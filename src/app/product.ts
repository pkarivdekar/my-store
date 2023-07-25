export interface Product {
    id:number,
    name:string,
    price:number,
    image:string,
    publishedDate:string,
    code:string,
    rating:number,
    description?:string //here ? make this property optional for the object
}
