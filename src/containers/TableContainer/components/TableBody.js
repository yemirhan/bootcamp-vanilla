import React from 'react'
import data from '../../../utils/data'
export const TableBody = () => {
    return (
        <tbody>
            {data.currencies.map((currency, index) => (
                <TableRow
                    key={index} //Normally, id assume every object in the array would have a unique id
                    rowData={currency}
                    rowKeys={["exchangeType",
                        "buy",
                        "sell",
                        "diff"]}
                />
            ))}
        </tbody>
    )
}
const TableRow = ({ rowData, rowKeys = [] }) => {
    return <tr >
        {rowKeys.map(rKey => <td key={rKey}>{rowData?.[rKey]}</td>)}
    </tr>
}