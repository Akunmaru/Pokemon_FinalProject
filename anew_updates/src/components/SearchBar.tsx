import React, {useState} from 'react';


export const SearchBar = () => {
    const [input, setInput] = useState("")

    const fetchData = (value: any) => {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) => {
            const results = json.filter((user: any) => {
                return user && user.name && user.name.toLowerCase().includes(value)
            })
            console.log(results)
        });
    }

    const handleChange = (value: any) => {
        setInput(value)
        fetchData(value)
    }

  return (
    <div>
        <input placeholder='Enter Pokemon Name' 
        type="text" 
        value={input} 
        onChange={(e) => handleChange(e.target.value)} />
    </div>
  )
}