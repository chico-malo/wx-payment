/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/2/21
 */
import * as React from 'react';
import { connect } from 'react-redux';
import { TableConstant } from "../../component/Table";
import { FormContainer } from '../../component/Form';
import { columnsTrade } from './config/columnsTrade';
import { searchTrade } from './config/searchTrade';
import { autoBind } from '@sitb/wbs/autoBind';
import { reduxForm } from 'redux-form'
import { momentUtils } from '../../utils/momentFormat';
import { getActions } from '../../core/store';
import { firstMerchantNo } from '../../constants/select/merchantNo';
import { lang } from '../../constants/zh-cn';
import { arrayUtils } from '../../utils/arrayUtils';
import { dataSourceUtils } from '../../utils/dataSourceUtils';

const validate = values => {
  const errors: any = {};
  // 检验商户号
  if (!values.merchantNo) {
    errors.merchantNo = lang.pleaseInput(lang.merchantNo);
  }
  if (!values.businessTypes) {
    errors.businessTypes = lang.pleaseInput(lang.businessType);
  }
  return errors;
};

@reduxForm({
  form: 'tradeQuery', // a unique identifier for this form
  validate,
  initialValues: {
    merchantNo: firstMerchantNo(),
    businessTypes: 'ALL'
  }
})
@connect(({trade}) => ({
  processing: trade.processing,
  page: trade.page
}))
@autoBind
export class TradeQuery extends React.Component<any, any> {

  componentWillMount(): void {
    this.handleSearch();
  }

  /**
   * 搜索方法
   * @param params 搜索参数
   */
  handleSearch(params: any = {
    merchantNo: firstMerchantNo(),
    businessTypes: 'REFUND,CANCEL'
  }): void {
    // 深拷贝搜索参数，合并默认参数并转换成数组去重
    let newParams = dataSourceUtils.deepClone(params);
    let DEFAULT_TYPE = `REFUND,CANCEL,${newParams.businessTypes || ''}`;
    let ArrayType = DEFAULT_TYPE.split(',');
    let newBusinessTypes: any = arrayUtils.unique(ArrayType);
    newParams.businessTypes = newBusinessTypes;

    getActions().trade.startQuery(newParams);
    console.log('search =>', newParams);
  }

  onSubmit(params) {
    let newParams = params;
    const {settleAt} = newParams;
    if (settleAt) {
      newParams.startAt = `${momentUtils.formatDate(newParams.settleAt)} 00:00:00`;
      newParams.endAt = `${momentUtils.formatDate(newParams.settleAt)} 23:59:59`;
    }
    this.handleSearch(newParams);
  }

  render() {
    const {page, processing, ...other} = this.props;
    // 传递formRedux 所传递的props
    const formProps: any = {...other};
    return (
      <React.Fragment>
        <FormContainer fieldGroups={searchTrade}
                       formSubmitProcessing={processing}
                       onSubmit={this.onSubmit}
                       {...formProps}
        />
        <TableConstant dataResource={page.content}
                       processing={processing}
                       columns={columnsTrade}
                       tableTitle="交易查询"
                       selection={{type: 'checkbox'}}
        />
      </React.Fragment>
    );
  }
}
