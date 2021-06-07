import React from "react";
import {DeleteOutlined} from '@ant-design/icons';
import {Button} from 'antd';
import '../styles.css';

function Note(props) {

  function handleClick(){
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <Button onClick={handleClick}>
        <DeleteOutlined />
      </Button>
    </div>
  );
}

export default Note;
