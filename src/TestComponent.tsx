import React, { useState } from 'react'

interface props {
    text: string
}

interface UserData {
    id: number;
    name: string;
}

const TestComponent: React.FC<props> = (props) => {
    const [count, setCount] = useState<number | null>(12);
    const [user, setuser] = useState<UserData>({id:1, name: "dummy"});
    const [inputData, setInputData] = useState("");
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) =>
      setInputData(e.target.value);
    // setCount(1)
    return (
        <div>
            <h1>{props.text}</h1>
            <h1>{count}</h1>
            <input type="text" value={inputData} onChange={handleInputChange} />
            <h1>{inputData}</h1>
        </div>
    )
}

export default TestComponent
