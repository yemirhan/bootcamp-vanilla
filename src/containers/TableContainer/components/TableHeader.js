import React from 'react'

export const TableHeader = () => {
    return ( //I Could've also used Object.keys to get the keys of every object of the data, but because the example has very little fiels, i chose not to
        <thead>
            <tr> 
                <th>Döviz Cinsi</th>
                <th>Alış(TL)</th>
                <th>Satış(TL)</th>
                <th>Fark(%)</th>
            </tr>
        </thead>
    )
}
