import React from 'react'
import data from '../utils/data'
export const TableBody = () => {

    return (
        <tbody>
            {data.currencies.map(currency => (
                <TableRow
                    key={currency.exchangeType}
                    exchangeType={currency.exchangeType}
                    buy={currency.buy}
                    sell={currency.sell}
                    diff={currency.diff}
                />
            ))}
        </tbody>
    )
}
const TableRow = ({ exchangeType, buy, sell, diff }) => {
    return <tr >
        <td>{exchangeType}</td>
        <td>{buy}</td>
        <td>{sell}</td>
        <td>{diff}</td>
    </tr>
}