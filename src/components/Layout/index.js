import React from 'react'
import { Sidebar } from '../Sidebar'

export const Layout = (props) => {
    return (
        <div>
            <div className="container">
                {props.children}
                <Sidebar />
            </div>
            <div>
                This is my footwear
            </div>
        </div>
    )
}
