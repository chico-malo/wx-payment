/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/2/21
 */
import * as React from 'react';
import { autoBind } from "veigar/autoBind";
import { TableConstant } from "../../component/Table";
import { FormContainer } from '../../component/Form';
import { columnsTradeQuery } from './config/columnsTradeQuery';
import { searchTradeQuery } from './config/searchTradeQuery';

@autoBind
export class TradeQuery extends React.Component<any, any> {

  onSubmit(e) {
    console.log(e);
  }

  render() {

    return (
      <React.Fragment>
        <FormContainer fieldGroups={searchTradeQuery}
                       formSubmitProcessing={false}
                       onSubmit={this.onSubmit}
        />
        <TableConstant dataResource={[]}
                       columns={columnsTradeQuery}
                       tableTitle="交易查询"
                       selection={{type: 'checkbox'}}
        />
      </React.Fragment>
    );
  }
}
