const chaiArray: string[]  = ["Masala", "Adarak", "elaichi"]

const prices : number[] = [20,15,40]

type Chai = {
    name : string;
    price : number

}
const menu : Chai[] = [
    {name : "Masala" , price : 10},
    {name : "Adarak", price : 20}
]

//read only arrys - 
const cities: readonly string[] = ["Ayodhya","Sultanpur"]

//ttuples 

let userInfo : [string, number, boolean?]

userInfo = ["sansu", 19 ]

//readonly tuples -- const location : readonly [string,number] = []

//named tupls
const chaiItems : [name:string, price:number] = ["Adarak", 40]

//enums

enum CupSIze {
    SMALL, 
    MEDIUM,
    LARGE
}
