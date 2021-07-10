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
    // setCount(1)
    return (
        <div>
            <h1>{props.text}</h1>
            <h1>{count}</h1>
        </div>
    )
}

export default TestComponent
