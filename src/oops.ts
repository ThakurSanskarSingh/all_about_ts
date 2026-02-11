class Chai {
    flavour : string;
    price : number

    constructor (flavour : string,price : number){
        this.flavour = flavour;
        this.price  = price
    }

    
}

const masalaChai = new Chai("Masala",20)

//private itms
class Wallet {
    #balance : number = 100;
    getBalance() {
        return this.#balance 
    }
}

const w = new Wallet()
w.getBalance()

abstract class Drink{
    abstract make() : void 
}

class beer extends Drink {
    make(): void {
        
    }
}