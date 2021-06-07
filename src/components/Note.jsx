import React from "react";
import {DeleteOutlined} from '@ant-design/icons';
import {Button, Card} from 'antd';
import '../styles.css';

function Note(props) {

  function handleClick(){
    props.onDelete(props.id);
  }

  return (
    <Card className="note" bordered={false}>
      <h1>{props.title}</h1>
      <p>{props.description}</p>
      <Button onClick={handleClick}>
        <DeleteOutlined />
      </Button>
    </Card>
  );
}

export default Note;
