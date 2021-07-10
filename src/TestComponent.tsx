import React, { useState } from 'react'

interface props {
    text: string
}

const TestComponent: React.FC<props> = (props) => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <h1>{props.text}</h1>
        </div>
    )
}

export default TestComponent
