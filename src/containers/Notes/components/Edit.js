import React, { useEffect, useState } from 'react'
import {
    Switch,
    Route,
} from "react-router-dom";
import { EditArea } from './EditArea';
export const Edit = () => {
    return (<div className="w-full h-screen bg-white flex items-center justify-center">
        <Switch>
            <Route path={"/notes/:id"} render={props => <EditArea {...props} />} />
            <Route path="/" exact render={props => <div {...props} className="w-full h-screen bg-white flex items-center justify-center">Sol taraftan bir not seçiniz.</div>} />
            {/* <Route path="*" render={props => <div {...props}>:(</div>} /> */}
        </Switch></div>
    )
}
