export interface tags{
    _id:string,
    name:string,
    createdAT:string,
    updatedAt:string,
    __v:string
}
export interface article{
    _id:string,
    desc:string,
    header:string,
    tags:string[],
    createdAT:string,
    updatedAt:string,
    __v:string

}