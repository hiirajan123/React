import React from 'react'

function HookCounter3(){
    const [name, setName] = React.useState({
        firstName: 'Kumar',
        secondName: 'Ranjan'
    })
    return(
        <div>
            <form>
                <input type="text" value={name.firstName} onChange={e=>setName({...name, firstName:e.target.value})}></input>
                {/* Spread Operator */}
                <input type="text" value={name.secondName} onChange={e=>setName({...name, secondName:e.target.value})}></input>
                <h2>Your first name is - {name.firstName}</h2>
                <h2>Your second name is - {name.secondName}</h2>
                
            </form>
        </div>
    )
}

export default HookCounter3