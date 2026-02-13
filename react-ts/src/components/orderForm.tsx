import React, { useState } from 'react'


interface orderFormProps {
    onSubmit(order : {name : string; cups:number}): void
}
const orderForm = ({onSubmit}:orderFormProps)  => {
    const [name,setName] = useState<string>("")
    const[cup, setCup] = useState(0)

    function handleSubmit (e : React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        onSubmit({name, cup})
    }
      return <form onSubmit={handleSubmit}> 

        <label>Chai name</label>
        <input type="text"
        value={name}
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
        />

        <label>number of cups</label>
        <input type="number"
        value={cup}
        onChange={(e:React.ChangeEvent<HTMLInputElement>) => setCup(Number(e.target.value) || 0)}
        />
        
      </form>
}

export default orderForm