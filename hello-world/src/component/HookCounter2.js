import React from 'react'

function HookCounter2(){
    let initialValue=0;
    const [count,setcount] = React.useState(initialValue);

    console.log(count);
    function IncrementByFive(){
        for(let i=0;i<5;i++)
        setcount(prev=>prev+1)
    }

    return(
        <div>
            count: {count}
            <button onClick={()=>setcount(initialValue)}>Reset</button>
            <button onClick={()=>setcount(count+1)}>Increment</button>
            <button onClick={()=>setcount(count-1)}>Decrement</button>
            <button onClick={IncrementByFive}>IncrementByFive</button>
        </div>
    )
}

export default HookCounter2