import React from 'react'
import './Topbar.css'
function Topbar() {
    return (
        <div id="topbar" className="webinar">
            <div className="inner">
                <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="43" height="39"><path d="M17.953 2.068a4.042 4.042 0 0 1 7.064 0l17.406 30.7a4.217 4.217 0 0 1 0 4.153A4.066 4.066 0 0 1 38.891 39H4.079a4.063 4.063 0 0 1-3.531-2.077 4.217 4.217 0 0 1 0-4.153zm0 2c.729-1.285 2.075-3.077 3.532-3.077s2.8 1.792 3.532 3.077C29.662 12.262 36.355 23.806 41 32c.729 1.285 1.152 2.638.423 3.923A4.066 4.066 0 0 1 37.891 38H5.079a4.063 4.063 0 0 1-3.531-2.077C.819 34.638 1.271 33.285 2 32c4.645-8.194 11.308-19.738 15.953-27.932zM20 9h3v18h-3V9zm0 22h3v3h-3v-3z" fill="#f16334" fill-rule="evenodd"></path></svg>
                <p className="title">New Feature: Type in a competitor's domain to get better keyword ideas</p>
            </div>
        </div>
    )
}

export default Topbar