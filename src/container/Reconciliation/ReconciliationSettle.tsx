/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/2/21
 */
import * as React from 'react';
import { autoBind } from "veigar/autoBind";
import { connect } from 'react-redux';
import { FormContainer } from '../../component/Form';
import { reduxForm } from 'redux-form'
import { settleSearch } from '../Funds/config/Search';
import { firstMerchantNo } from '../../constants/select/merchantNo';
import { validate } from '../Funds/config/validate';
import { getActions } from '../../core/store';

@reduxForm({
  form: 'reconciliationBillDown', // a unique identifier for this form
  validate,
  initialValues: {
    merchantNo: firstMerchantNo()
  }
})
@connect(({reconciliationSettle}) => ({
  processing: reconciliationSettle.processing
}))
@autoBind
export class ReconciliationSettle extends React.Component<any, any> {

  /**
   * 下载
   * @param params  请求参数
   */
  onSubmit(params) {
    getActions().reconciliationSettle.startDownload(params);
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
