import React from "react";
import {HourglassOutlined} from '@ant-design/icons';
import '../styles.css';
import {Layout} from 'antd';

const {Header} = Layout;

function header(){
    return <Header>
        <h1>
            <HourglassOutlined />
            To Do List
        </h1>
    </Header>;
}

export default header;