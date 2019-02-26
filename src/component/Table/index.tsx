/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-02-25
 */
import * as React from 'react';
import objectPath from 'object-path';
import { Checkbox, Paper, Radio, Table, TableBody, TableCell, TablePagination, TableRow } from '@material-ui/core';
import { autoBind } from "veigar/autoBind";

import { withStyles } from '../../utils/withStyles';
import { EnhancedTableToolbar } from './EnhancedTableToolbar';
import { ColumnsItem, EnhancedTableHead, SelectionItem } from "./EnhancedTableHead";
import { lang } from '../../constants/zh-cn';

export interface TableProps {
  classes?: any;
  dataResource: Array<any>;
  columns: Array<ColumnsItem>;
  selection?: SelectionItem;
}

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 1020,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

@withStyles(styles)
@autoBind
export class TableConstant extends React.Component<TableProps, any> {
  state = {
    order: 'asc',
    orderBy: 'calories',
    selected: [],
    page: 0,
    rowsPerPage: 5,
    isRadioStatus: ''
  };

  /**
   * 点击头部全选函数
   * @param event
   */
  handleSelectAllClick(event) {
    const {dataResource} = this.props;
    if (event.target.checked) {
      this.setState({selected: dataResource.map(n => n.id)});
      return;
    }
    this.setState({selected: []});
  }

  /**
   * tableItem 触发函数
   * @param event
   * @param item             item row数据
   * @param selectionType    选择器类型
   */
  handleTableItemClick(event, item: ColumnsItem, selectionType) {
    // 获取单选  多选 flag
    const { isRadioStatus} = this.state;
    const selected:Array<any> = this.state.selected;
    const {id} = item;
    // 单选 多选 state临时变量
    let newRadioStatus = id;
    let newSelected:any = [];
    // 如果选择器类型为单选，固定选择为1
    if (selectionType && selectionType === 'radio') {
      newSelected = [1];
      if (isRadioStatus === id) {
        newSelected = [];
        newRadioStatus = ''
      }
    } else {
      // 选择器为多选
      const selectedIndex: any = selected.indexOf(id);
      if (selectedIndex === -1) {
        newSelected = newSelected.concat(selected, id);
      } else if (selectedIndex === 0) {
        newSelected = newSelected.concat(selected.slice(1));
      } else if (selectedIndex === selected.length - 1) {
        newSelected = newSelected.concat(selected.slice(0, -1));
      } else if (selectedIndex > 0) {
        newSelected = newSelected.concat(
          selected.slice(0, selectedIndex),
          selected.slice(selectedIndex + 1),
        );
      }
    }

    this.setState({
      selected: newSelected,
      isRadioStatus: newRadioStatus
    });
  }

  handleChangePage(event, page) {
    this.setState({page});
  }

  handleChangeRowsPerPage(event) {
    this.setState({rowsPerPage: event.target.value});
  }

  isSelected(id: any) {
    // @ts-ignore
    return !(-1 === this.state.selected.indexOf(id));
  }

  /**
   * 排序函数
   * @param a
   * @param b
   * @param orderBy
   */
  desc(a, b, orderBy) {
    if (b[orderBy] < a[orderBy]) {
      return -1;
    }
    if (b[orderBy] > a[orderBy]) {
      return 1;
    }
    return 0;
  }

  /**
   * 获取排序结果
   * @param order
   * @param orderBy
   */
  getSorting(order, orderBy) {
    return order === 'desc' ? (a, b) => this.desc(a, b, orderBy) : (a, b) => -this.desc(a, b, orderBy);
  }

  /**
   * table排序函数
   * @param array  原数组
   * @param cmp
   */
  stableSort(array, cmp) {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
      const order = cmp(a[0], b[0]);
      if (order !== 0) return order;
      return a[1] - b[1];
    });
    return stabilizedThis.map(el => el[0]);
  }

  /**
   * 排序触发函数
   * @param event
   * @param property
   */
  handleRequestSort(event, property) {
    const orderBy = property;
    let order = 'desc';

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc';
    }
    this.setState({order, orderBy});
  }

  /**
   * 根据row 渲染table
   * @param tableRow  当前tableRow数据
   */
  renderTableBodyItem(tableRow:any) {
    const {columns} = this.props;
    return columns.map((rowItem:any, index) => {
      const {id, disablePadding, ...other} = rowItem;
      const newProps = {
        ...other,
        align: other.align || (other.numeric && 'right' || 'inherit')
      };
      return (
        <TableCell key={index}
                   {...newProps}
        >{tableRow[id]}</TableCell>
      )
    });
  }

  /**
   * 根据配置 生成table选择器
   * @param selectionType  选择器类型
   * @param isSelected     单选是否被选中
   * @param id             当前单独配置的id
   */
  renderTableSelection(selectionType, isSelected, id) {
    if (selectionType) {
      const {isRadioStatus} = this.state;
      // 渲染单选
      if (selectionType === 'radio') {
        return (
          <TableCell padding="checkbox">
            <Radio checked={isRadioStatus === id}/>
          </TableCell>
        )
      }
      //  渲染多选
      if (selectionType === 'checkbox') {
        return (
          <TableCell padding="checkbox">
            <Checkbox checked={isSelected}/>
          </TableCell>
        )
      }
    }
    return null;
  }

  render() {
    const {classes, dataResource, columns, selection} = this.props;
    const {order, orderBy, selected, rowsPerPage, page} = this.state;
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, dataResource.length - page * rowsPerPage);
    // 获取 选择器类型
    const selectionType = objectPath.get(selection, 'type');
    return (
      <Paper className={classes.root}>
        <EnhancedTableToolbar numSelected={selected.length}/>
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead numSelected={selected.length}
                               order={order}
                               orderBy={orderBy}
                               onSelectAllClick={this.handleSelectAllClick}
                               onRequestSort={this.handleRequestSort}
                               selection={selection}
                               rowCount={dataResource.length}
                               columns={columns}
            />
            <TableBody>
              {this.stableSort(dataResource, this.getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map(tableItem => {
                  const isSelected = this.isSelected(tableItem.id);
                  return (
                    <TableRow hover
                              onClick={event => this.handleTableItemClick(event, tableItem, selectionType)}
                              role="checkbox"
                              aria-checked={isSelected}
                              tabIndex={-1}
                              key={tableItem.id}
                              selected={isSelected}
                    >

                      {this.renderTableSelection(selectionType, isSelected, tableItem.id)}
                      {this.renderTableBodyItem(tableItem)}
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{height: 49 * emptyRows}}>
                  <TableCell colSpan={6}/>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination rowsPerPageOptions={[5, 10, 25]}
                         component="div"
                         count={dataResource.length}
                         rowsPerPage={rowsPerPage}
                         page={page}
                         backIconButtonProps={{
                           'aria-label': lang.previous
                         }}
                         nextIconButtonProps={{
                           'aria-label': lang.next
                         }}
                         onChangePage={this.handleChangePage}
                         onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
      </Paper>
    );
  }
}
