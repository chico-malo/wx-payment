/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/2/21
 */
import * as React from 'react';
import { connect } from 'react-redux';
import { TableConstant } from "../../component/Table";
import { FormContainer } from '../../component/Form';
import { columnsTradeQuery } from './config/columnsTradeQuery';
import { searchTradeQuery } from './config/searchTradeQuery';
import { autoBind } from '@sitb/wbs/autoBind';
import { momentUtils } from '../../utils/momentFormat';
import { getActions } from '../../core/store';
import { businessTypeOptions } from '../../constants/select/businessType';

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
    const {page, processing} = this.props;
    console.log(businessTypeOptions);
    return (
      <React.Fragment>
        <FormContainer fieldGroups={searchTradeQuery}
                       formSubmitProcessing={processing}
                       formSubmitButtonProps={{disabled: false}}
                       onSubmit={this.onSubmit}
        />
        <TableConstant dataResource={page.content}
                       columns={columnsTradeQuery}
                       tableTitle="交易查询"
                       selection={{type: 'checkbox'}}
        />
      </React.Fragment>
    );
  }
}
