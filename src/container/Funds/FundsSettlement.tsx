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



@connect(({fundsSettlement}) => ({
  content: fundsSettlement.content,
  processing: fundsSettlement.processing
}))
@autoBind
export class FundsSettlement extends React.PureComponent<any, any> {
  onSubmit(e) {
    console.log(e);
  }
  render() {
    const {content} = this.props;
    return (
      <React.Fragment>
        <FormContainer fieldGroups={settleSearch}
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
