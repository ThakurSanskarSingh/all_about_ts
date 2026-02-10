type Chai =  {
    water : number;
    milk :number
}
 class MasalaChai implements Chai {
    water =  100;
    milk= 70;
 }

// above code wwill work but if we have some custom type definatioons like - size : "small" | "large"
//int that case we need to use interface

// type CupSize = "small" | "large" | "medium";

// class Chai implements CupSize - it will give errrors

interface CupSize {
    size : "small" | "large"
}

//for classes alwayss refer interface

class Chaitea implements CupSize {
    size: "small" | "large" = "large"
}

//     size: "small" | "large" = "large" --> literal types
 
//intersection --

type BaseChai = {teaLeaves : number; ginger? : boolean}
type Extra = {masala : number}

type MehangiChai = BaseChai & Extra

const myChai : MehangiChai = {
    teaLeaves : 15,
    masala : 2
}
//then above shpuld contain both values , these are not opptional, for making it optional - add ?
