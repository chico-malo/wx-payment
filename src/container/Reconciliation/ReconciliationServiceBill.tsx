/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/2/21
 */
import * as React from 'react';
import { autoBind } from "veigar/autoBind";
import { FormContainer } from '../../component/Form';
import { settleSearch } from '../Funds/config/Search';

@autoBind
export class ReconciliationServiceBill extends React.Component<any, any> {

  onSubmit(e) {
    console.log(e);
  }

  render() {

    return (
      <React.Fragment>
        <FormContainer fieldGroups={settleSearch}
                       formSubmitProcessing={false}
                       onSubmit={this.onSubmit}
        />
      </React.Fragment>
    );
  }
}
