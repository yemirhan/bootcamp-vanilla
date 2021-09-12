import React from 'react'
import { Edit } from './modules/Edit'
import { SideMenu } from './modules/SideMenu'
import { Tasks } from './modules/Tasks'

export const Notes = () => {
    return (
        <div className="flex flex-row h-full">
            <SideMenu />
            <Tasks />
            <Edit />
        </div>
    )
}
