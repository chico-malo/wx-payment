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


@reduxForm({
  form: 'tradeQuery', // a unique identifier for this form
  initialValues: {
    merchantNo: 112500000000367
  }
})
@connect(({trade}) => ({
  processing: trade.processing,
  page: trade.page
}))
@autoBind
export class TradeQuery extends React.Component<any, any> {

  /**
   * 搜索方法
   * @param params 搜索参数
   */
  handleSearch(params: object = {}): void {
    getActions().trade.startQuery(params);
    console.log('search =>', params);
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
    const {page, processing, handleSubmit} = this.props;
    return (
      <React.Fragment>
        <FormContainer fieldGroups={searchTrade}
                       formSubmitProcessing={processing}
                       handleSubmit={handleSubmit}
                       formSubmitButtonProps={{disabled: false}}
                       onSubmit={this.onSubmit}
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
