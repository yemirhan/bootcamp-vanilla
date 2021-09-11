import React from 'react'

const types = {
    danger: "bg-red-200 hover:bg-red-300",
    "primary": "bg-blue-200 hover:bg-blue-300",
}
export const Button = ({ type = "primary", onClick = () => { }, title, children }) => {
    return (
        <button onClick={onClick} className={`w-auto px-2 py-1 rounded-lg ${types[type]}`}>{title || children}</button>
    )
}
