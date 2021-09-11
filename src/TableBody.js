import React from 'react'
import data from './data'
export const TableBody = () => {
    return (
        <tbody>
            {data.currencies.map(currency => (
                <tr key={currency.exchangeType}>
                    <td>{currency.exchangeType}</td>
                    <td>{currency.buy}</td>
                    <td>{currency.sell}</td>
                    <td>{currency.diff}</td>
                </tr>
            ))}
        </tbody>
    )
}
