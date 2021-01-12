// No need to change for simple forms
// submit and draft save will be handled by formComponent ( default )
import React from "react";
import { useSelector } from "react-redux";
import { reduxForm, getFormValues } from "redux-form";
import FormBaseTemplate from "../components/FormBaseTemplate";

import formSectionJSON from "./form";

let formTemp = (props) => {
  const formFields = formSectionJSON({ ...props });

  return (
    <FormBaseTemplate
      data={formFields}
    />
  );
};
export default formTemp;
