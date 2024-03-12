import React from 'react'

interface Person {
    name: string;
    age: number;
    email: string;
    address: Address;
    isAlive?: boolean;
}

interface Address {
    city: string;
    zip: number;
    lat: number;
    lng: number;
}

const ObjectLiteral = () => {

    const persona : Person = {
        name: 'Fernando',
        age: 35,
        email: 'user@gmail.com',
        address: {
            city: 'New York',
            zip: 55321321,
            lat: 14.3232,
            lng: 34.9233
        },
        isAlive: true
    }

  return (
    <>
        <h3>Object Literal</h3>
        <pre>
            {JSON.stringify(persona, null, 2)}
        </pre>
    </>
  )
}

export default ObjectLiteral