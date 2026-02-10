function getChai(kind : string | number) {
    if(typeof kind == "string"){
        return `chai is of ${kind}`
    }
    return `Making order ${kind}`
}


function serveChai(msg? : string) {
    if(msg) {
        return `Serving ${msg} chai `
    }
     return `Serving default chai`
}

type ChaiOrder = {
    type : string
    sugar : number
}

function serveOrder(item : ChaiOrder) {
    return `Serving ${item.type} chai with ${item.sugar} sugar`
}

type MasalaChai  = {type : "Masala", sugar : string}
type Elachichai  = {type : "Elaoichi", sugar : string}
type Gingertea  = {type : "Ginger", sugar : string}

type Chai = MasalaChai | Elachichai | Gingertea

function MakeChai(order : Chai) {

    switch (order.type){
        case "Masala" : 
           return `Masala chai`
           break;
        case "Elaoichi" :
            return `Elaichi chai`  
    }
}
