import React from 'react'

export default function Info({img, title}:any) {
    console.log('heelo')
    return (
        <div className="info">
            <h1>{title}</h1>
            <img src={img} alt="info " />
        </div>
    )
}
