//alias objects

type Tea = {
    name : string;
    price : number;
    ingredients : string[]
}

const adrakChai : Tea  = {
    name : "Adrak chai",
    price : 20,
    ingredients : ["Adrak", "milk"]
}


type Brew = {brewTime : number}
const coffee = {brewTime:10, beans : "Arabica"}

const chaiBrew:Brew = coffee
//bare minimum prosps shold be there, we can add extra types as well

type Item =  {name : string;
    quantity : number}

type Address = {street :string; pin : number}
type Order = {
    id : string;
    items : Item[]
    address : Address
}

//above things bring more clearity 

//partial keyword - make all the props optional
type Chai = {
    name : string;
    price  : number;
    isHot : boolean;
}

const updateChai = (updates : Partial<Chai>) => {
    
}

//similarly in sam e way - Required - make all propertis req

//Pick - we can pick only which values are req (compulsory)



