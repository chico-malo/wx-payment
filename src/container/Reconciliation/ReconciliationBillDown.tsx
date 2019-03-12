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
import { firstMerchantNo } from '../../constants/select/merchantNo';
import { validate } from '../Funds/config/validate';

@reduxForm({
  form: 'simple', // a unique identifier for this form
  validate,
  initialValues: {
    merchantNo: firstMerchantNo()
  }
})
@autoBind
export class ReconciliationBillDown extends React.Component<any, any> {

  onSubmit(e) {
    console.log(e);
  }

  render() {
    const {processing, ...other} = this.props;
    const formProps: any = {...other};

    return (
      <React.Fragment>
        <FormContainer fieldGroups={settleSearch}
                       formSubmitProcessing={processing}
                       formSubmitButtonName="下载"
                       onSubmit={this.onSubmit}
                       {...formProps}
        />
      </React.Fragment>
    );
  }
}
