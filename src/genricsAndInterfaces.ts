//interfaces only fro defining structures, no actual code runs 
// methoda are mostly defined in interfaces
interface teaMachine{
    start() :void;
    stop() : void


}

const machine : teaMachine = {
    start() {
     console.log("started")
    },
    stop () {

    }
}
//genrics - we can generalize funtion for diff types
function wrapper<T>(item : T) : T[] {
    return [item]
}
//it will take T type and return T  type , it will handle diff types automaticaly

wrapper("Aalooa")
wrapper(5)
wrapper({flavor : "Aaaloo"})

function pair< A , B>(a: A, b: B) : [A,B]{
return [a,b]
}

interface apiPromise<T>{
    status : number;
    data : T
}

const res:apiPromise<{flavor : string}> = {
    status : 200,
    data : {flavor : "masala"}

}