/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/2/21
 */
import * as React from 'react';
import { autoBind } from "veigar/autoBind";
import { TableConstant } from "../../component/Table";
import { FormContainer } from '../../component/Form';
import { searchBillDown } from './config/searchBillDown';
import { columnsBillDown } from './config/columnsBillDown';

@autoBind
export class ReconciliationBillDown extends React.Component<any, any> {

  onSubmit(e) {
    console.log(e);
  }

  render() {

    return (
      <React.Fragment>
        <FormContainer fieldGroups={searchBillDown}
                       formSubmitProcessing={false}
                       onSubmit={this.onSubmit}
        />
        <TableConstant dataResource={[]}
                       columns={columnsBillDown}
                       tableTitle="账单下载"
                       selection={{type: 'checkbox'}}
        />
      </React.Fragment>
    );
  }
}
