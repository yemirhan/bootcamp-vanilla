import React from 'react'
import { TableBody } from './components/TableBody'
import { TableHeader } from './components/TableHeader'
import "../../styles/tablestyle.css"
export const Table = () => {
    return (
        <table>
            <TableHeader />
            <TableBody />
        </table>
    )
}
