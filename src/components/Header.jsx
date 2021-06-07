import React from "react";
import {HourglassOutlined} from '@ant-design/icons';
import '../styles.css';

function Header(){
    return <header>
        <h1>
            <HourglassOutlined />
            To Do List
        </h1>
    </header>;
}

export default Header;