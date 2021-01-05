import React from "react";
import { useSelector } from "react-redux";
import { reduxForm, getFormValues } from "redux-form";
import FormBaseTemplate from "../../../../../../components/formTemplates/BaseTemplate";

import formSectionJSON from "./form";

let formTemp = (props) => {
  const { handleSubmit, onChangedValue, isFieldDisabled } = props;
  const formFields = formSectionJSON({ ...props });

  return <FormBaseTemplate data={formFields} disabled={isFieldDisabled} />;
};
export default formTemp;
