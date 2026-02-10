//force fully injecting type s--

let response : any = "23"

let myLength :number = (response as string).length

const inputElement = document.getElementById("username") as HTMLInputElement // we need to forcefully tell its inout element

//unknown use karte waqt type batani padegi

let value : any;
value = "aaloo"
value = [1,2,3]
value = 4.5;

value.toUppercase();  //its not giving any type of erros , in sam eca se if we use unknown

let newValue : unknown;
newValue = "aalooo"
newValue = 5.74;
//value.toUppercase( -> it will give errors)

if(typeof newValue == "string"){
    newValue.toUpperCase(); //we need to tell type before using
}

//try catch and handling errors
try {
    
} catch (error) {
    if(error instanceof Error){
        console.log(error.message) // we cant directly write error.message
    }
    
}

//never