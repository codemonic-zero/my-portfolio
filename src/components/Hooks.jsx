import React, { useEffect, useState } from 'react'

const Hooks = () => {
    const [myname, setMyname] = useState('Piyush');

    // console.log(myname);
    useEffect(() => {
        <br />
        console.log(myname);
    }, [myname])
    let arr = ['Ravi', 'yadao', 'ram'];

    return (
        <>
            <p>{arr[myname]}</p>
            <button onClick={() => { setMyname(myname + 1) }}>clickme</button>
        </>
    )
}

export default Hooks
