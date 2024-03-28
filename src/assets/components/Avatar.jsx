import { useState } from 'react';

function Avatar({ image, firstName, lastName }) {
    const [count, setCount] = useState(0);

    const handleClick = () => {
        setCount(count + 1)
    };

    return (
        <>
            <img src={image} />
            <button onClick={handleClick}>🍩</button> <p>{count}</p>
            <p>{firstName} {lastName}</p>
        </>
    )
}

export default Avatar;