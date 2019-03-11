/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/2/21
 */
import * as React from 'react';
import { autoBind } from "veigar/autoBind";
import { FormContainer } from '../../component/Form';
import { reduxForm } from 'redux-form'
import { settleSearch } from '../Funds/config/Search';

const validate = values => {
  const errors: any = {};
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.selectText) {
    errors.selectText = 'Required'
  } else if (values.selectText.length > 15) {
    errors.selectText = 'Must be 15 characters or less'
  }
  return errors
};

const warn = values => {
  const warnings: any = {};
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
};

@reduxForm({
  form: 'simple', // a unique identifier for this form
  warn,
  validate,
  initialValues: {
    merchantNo: 112500000000367
  }
})
@autoBind
export class ReconciliationBillDown extends React.Component<any, any> {

  onSubmit(e) {
    console.log(e);
  }

  render() {

    return (
      <React.Fragment>
        <FormContainer fieldGroups={settleSearch}
                       formSubmitProcessing={false}
                       handleSubmit={this.props.handleSubmit}
                       formSubmitButtonName="下载"
                       onSubmit={this.onSubmit}
        />
      </React.Fragment>
    );
  }
}
