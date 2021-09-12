import React from 'react'
import { Edit } from './layout/Edit'
import { SideMenu } from './layout/SideMenu'
import { Tasks } from './layout/Tasks'

export const Notes = () => {
    return (
        <div className="flex flex-row h-full">
            <SideMenu />
            <Tasks />
            <Edit />
        </div>
    )
}
