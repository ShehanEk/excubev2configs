import React from "react";
import { useSelector } from "react-redux";
import { reduxForm, getFormValues } from "redux-form";
import FormBaseTemplate from "../components/FormBaseTemplate";

import formSectionJSON from "./form";

let formTemp = (props) => {
  const { handleSubmit, onChangedValue, isFieldDisabled } = props;
  const formFields = formSectionJSON({ ...props });

  return (
    <FormBaseTemplate
      data={formFields}
      disabled={isFieldDisabled}
      // can add custom hooks like this if needed
      customHooks={{
        executionAction: "SA_DC",
        hook: (e) => {},
      }}
    />
  );
};
export default formTemp;
