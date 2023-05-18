import React from 'react'
interface GreetingProps{
    message: string;
}

export default function Greeting(props: GreetingProps){
    console.log("Greeting Funcional.render")
    return(<div>
        {props.message}
    </div>)
}