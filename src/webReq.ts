import axios from 'axios'
import type {AxiosResponse} from 'axios'

//d.ts - declarations files - it contains declarations or structure definations 

//npm i -D @types/some-library 

interface TODO {
 id: number;
 userId: number;
 title : string;
completed : boolean
 
}


const fetchData = async () => {
    try {
        const res:AxiosResponse<TODO> = await axios.get("https://jsonplaceholder.typicode.com/todos/1")
        console.log(res.data)
    } catch (error) {
        if(axios.isAxiosError(error)){
            console.log("axios error" , error.message)
        }
    }
}
