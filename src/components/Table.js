import React from 'react'
import { TableBody } from './TableBody'
import { TableHeader } from './TableHeader'
import "../styles/tablestyle.css"
export const Table = () => {
    return (
        <table>
            <TableHeader />
            <TableBody />
        </table>
    )
}
