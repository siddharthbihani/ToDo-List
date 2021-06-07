import React, { useState } from "react";
import {PlusOutlined} from '@ant-design/icons';
import { Button, Input, Form } from "antd";
import '../styles.css';

const { TextArea } = Input;

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    description: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      description: ""
    });
    event.preventDefault();
  }

  function expand(){
      setExpanded(true);
  }

  return (
    <div>
      <Form className="create-note">
        {isExpanded && (
          <Input
            name="title"
            onChange={handleChange}
            value={note.title}
            placeholder="Add Task"
          />
        )}
          <TextArea
            name="description"
            onClick={expand}
            onChange={handleChange}
            value={note.description}
            placeholder={isExpanded ?"Add Task Description" :"Add Task"}
            rows={isExpanded ? 3 : 1}
          />
            <Button type="primary" shape="circle" onClick={submitNote}>
                <PlusOutlined />
            </Button>
      </Form>
    </div>
  );
}

export default CreateArea;
