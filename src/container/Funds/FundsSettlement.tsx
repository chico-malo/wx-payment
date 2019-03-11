/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/2/22
 */
import * as React from 'react';
import { connect } from 'react-redux';
import { FormContainer } from '../../component/Form';
import { TableConstant } from '../../component/Table';
import { settleSearch } from './config/Search';
import { settleColumns } from './config/Columns';
import { autoBind } from '@sitb/wbs/autoBind';
import { getActions } from '../../core/store';
import { momentUtils } from '../../utils/momentFormat';

@connect(({fundsSettlement}) => ({
  page: fundsSettlement.page,
  processing: fundsSettlement.processing
}))
@autoBind
export class FundsSettlement extends React.PureComponent<any, any> {
  /**
   * 搜索方法
   * @param params 搜索参数
   */
  handleSearch(params: object = {}): void {
    getActions().fundsSettlement.startQuery(params);
    console.log('search =>', params);
  }

  /**
   * 手动onSearch方法
   * @param params
   */
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
    return (
      <React.Fragment>
        <FormContainer fieldGroups={settleSearch}
                       formSubmitProcessing={processing}
                       formSubmitButtonProps={{disabled: false}}
                       onSubmit={this.onSubmit}
        />
        <TableConstant dataResource={page.content}
                       columns={settleColumns}
                       processing={processing}
                       tableTitle="结算查询"
        />
      </React.Fragment>
    )
  }
}
