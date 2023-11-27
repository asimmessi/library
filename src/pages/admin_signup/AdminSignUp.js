import React from "react";
import { Button, Form } from "react-bootstrap";
import { CustomInput } from "../../components/custom-input/CustomInput";

export const AdminSignUp = () => {
  const inputs = [
    {
      label: "First Name",
      name: "fName",
      placeholder: "sam",
      type: "text",
      required: true,
    },
    {
      label: "Last Name",
      name: "lName",
      placeholder: "Smith",
      type: "text",
      required: true,
    },
    {
      label: "Email",
      name: "email",
      placeholder: "sam@email.com",
      type: "email",
      required: true,
    },
    {
      label: "Phone",
      name: "phone",
      placeholder: "0411111111",
      type: "number",
    },
    {
      label: "Password",
      name: "password",
      placeholder: "******",
      type: "password",
      required: true,
    },
    {
      label: "Confirm Password",
      name: "confirmPassowrd",
      placeholder: "******",
      type: "password",
      required: true,
    },
  ];
  return (
    <div className="bg-dark p-3 text-light">
      <Form className="form-center border shadow-lg p-4 rounded mt-5">
        <h2>Create New Admin </h2>
        <hr />
        {inputs.map((item, i) => (
          <CustomInput key={i} {...item} />
        ))}

        <div className="d-grid mt-2">
          <Button variant="primary" type="submit">
            {" "}
            Create New Admin
          </Button>
        </div>
      </Form>
    </div>
  );
};
