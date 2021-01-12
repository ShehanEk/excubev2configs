// Can use when approve/reject step need to show form
import React from "react";
import { useSelector } from "react-redux";
import { reduxForm, getFormValues } from "redux-form";
import ApproveRejectTemplate from "../components/ApproveRejectTemplate";

import formSectionJSON from "./form";

let stepApproveReject = (props) => {
  const formFields = formSectionJSON({ ...props });

  return <ApproveRejectTemplate data={formFields}  />;
};
export default stepApproveReject;
