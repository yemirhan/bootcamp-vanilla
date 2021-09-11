import React from 'react'
import { Edit } from './components/Edit'
import { SideMenu } from './components/SideMenu'
import { Tasks } from './components/Tasks'

export const Notes = () => {
    return (
        <>
            <SideMenu />
            <Tasks />
            <Edit />
        </>
    )
}
