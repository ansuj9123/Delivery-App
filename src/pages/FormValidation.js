import React from "react";
import { Form, Button } from 'semantic-ui-css';
import $ from 'jquery';

export default function FormValidation () {
  return (
    <div>
      <Form>
        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" type="text" />
        </Form.Field>

        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" type="text" />
        </Form.Field>

        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" type="text" />
        </Form.Field>

        <Form.Field>
          <label>First Name</label>
          <input placeholder="First Name" type="text" />
        </Form.Field>
        <Button type="submit">Submit</Button>
      </Form>
    </div>
  );
};


