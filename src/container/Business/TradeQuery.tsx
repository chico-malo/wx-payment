/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/2/21
 */
import * as React from 'react';
import { autoBind } from "veigar/autoBind";
import { TableConstant } from "../../component/Table";
import { ColumnsItem } from '../../component/Table/EnhancedTableHead';
import { FormContainer } from '../../component/Form';
import { lang } from '../../constants/zh-cn';

const rows: Array<ColumnsItem> = [
  {id: 'name', align: 'left', disablePadding: false, label: '姓名'},
  {id: 'gender', align: 'right', disablePadding: false, label: '性别'},
  {id: 'age', align: 'right', disablePadding: false, label: '年龄'},
  {id: 'favorite', align: 'right', disablePadding: false, label: '喜爱'}
];

const dataResource = [{
  id: 1,
  name: 'l',
  gender: '男',
  age: '18',
  favorite: '飞飞飞'
}, {
  id: 2,
  name: '月',
  gender: '男',
  age: '17',
  favorite: 'kami'
}];

@autoBind
export class TradeQuery extends React.Component<any, any> {
  render() {

    const fieldGroups: any = [{
      fields: [{
        label: lang.merchant,
        name: 'merchantNo',
        missText: '2222',
        required: true
      }, {
        label: lang.time,
        name: 'time'
      }, {
        label: lang.tradeState,
        name: 'tradeState'
      }, {
        label: lang.amount,
        name: 'amount'
      }, {
        label: lang.audioNumber,
        name: 'audioNumber'
      }, {
        label: lang.businessType,
        name: 'businessType'
      }]
    }];

    return (
      <React.Fragment>
        <FormContainer fieldGroups={fieldGroups}/>
        <TableConstant dataResource={dataResource}
                       columns={rows}
                       selection={{type: 'checkbox'}}
        />
      </React.Fragment>
    );
  }
}
