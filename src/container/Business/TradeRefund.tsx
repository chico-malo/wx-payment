/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/2/21
 */
import * as React from 'react';
import { connect } from 'react-redux';
import { autoBind } from "veigar/autoBind";
import { reduxForm } from 'redux-form'

import { TableConstant } from "../../component/Table";
import { FormContainer } from '../../component/Form';
import { getActions } from '../../core/store';
import { momentUtils } from '../../utils/momentFormat';
import { validate } from './config/validate';
import { initialValues } from './config/initialValues';
import { columnsTrade } from './config/columnsTrade';
import { searchTrade } from './config/searchTrade';
import { firstMerchantNo } from '../../constants/select/merchantNo';
import { dataSourceUtils } from '../../utils/dataSourceUtils';
import { businessTypeDeepClone } from '../../constants/select/businessType';
import { arrayUtils } from '../../utils/arrayUtils';
import { searchKey } from './config/searchKey';

@reduxForm({
  form: 'tradeRefund', // a unique identifier for this form
  validate,
  initialValues
})
@connect(({trade}) => ({
  processing: trade.processing,
  page: trade.page
}))
@autoBind
export class TradeRefund extends React.Component<any, any> {

  componentWillMount(): void {
    this.handleSearch();
  }

  /**
   * 搜索方法
   * @param params 搜索参数
   */
  handleSearch(params: any = {
    merchantNo: firstMerchantNo(),
    businessTypes: searchKey.cancel
  }): void {
    // 深拷贝搜索参数，合并默认参数并转换成数组去重
    let newParams = dataSourceUtils.deepClone(params);
    // 过滤type，调出除查询的其他业务类型，并且判断不等于默认值才进行过滤。
    let filterType = '';
    if (newParams.businessTypes !== searchKey.cancel) {
      filterType = businessTypeDeepClone(newParams.businessTypes, 'string');
    }
    // 合并type，转换成数组去重
    let DEFAULT_TYPE = `${searchKey.cancel},${filterType}`;
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
    const formProps: any = {...other};
    return (
      <React.Fragment>
        <FormContainer fieldGroups={searchTrade}
                       formSubmitButtonProps={{disabled: false}}
                       formSubmitProcessing={processing}
                       onSubmit={this.onSubmit}
                       {...formProps}
        />
        <TableConstant dataResource={page.content}
                       processing={processing}
                       columns={columnsTrade}
                       tableTitle="交易退款"
                       selection={{type: 'checkbox'}}
        />
      </React.Fragment>
    );
  }
}
