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


@connect(({fundsSettlement}) => ({
  content: fundsSettlement.content,
  processing: fundsSettlement.processing
}))
@autoBind
export class FundsSettlement extends React.PureComponent<any, any> {

  handleSearch(params: object = {}): void {
    getActions().fundsSettlement.startQuery(params);
    console.log('search =>', params);
  }

  onSubmit(params) {
    this.handleSearch(params);
  }

  render() {
    const {content, processing} = this.props;
    return (
      <React.Fragment>
        <FormContainer fieldGroups={settleSearch}
                       formSubmitProcessing={processing}
                       formSubmitButtonProps={{disabled: false}}
                       onSubmit={this.onSubmit}
        />
        <TableConstant dataResource={content}
                       columns={settleColumns}
                       tableTitle="交易查询"
        />
      </React.Fragment>
    )
  }
}
