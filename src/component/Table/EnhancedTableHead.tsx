/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-02-25
 * table 头部select部分
 */
import * as React from "react";
import { Checkbox, TableCell, TableHead, TableRow, TableSortLabel, Tooltip } from "@material-ui/core";
import objectPath from 'object-path';
import { TableCellProps } from '@material-ui/core/es/TableCell';

export interface SelectionItem {
  /**
   * 选择器类型
   */
  type: 'radio' | 'checkbox'
}

export interface ColumnsItem extends TableCellProps {
  /**
   * 表头标题
   */
  label: string;
  /**
   * 唯一标示 number string
   */
  id: any;
  /**
   * 表头item 内边距
   */
  disablePadding?: boolean;
  /**
   * 自定义隐射
   * @param key  当前key
   * @param row  当前行数据
   */
  render?: (key, row) => void;
  /**
   * 隐射源，只需要提供需要隐射的对象
   */
  mappingSource?: object
}

export interface TableHeadProps {
  /**
   * 全部选中
   */
  onSelectAllClick: (e) => void;
  /**
   * 排序规则
   * @param e
   * @param property
   */
  onRequestSort: (e, property) => void;
  order: any;
  orderBy: any;
  /**
   * 选择数目
   */
  numSelected: number;
  rowCount: number;
  /**
   * 表头配置
   */
  columns: Array<ColumnsItem>;
  /**
   * 选择器配置
   */
  selection?: SelectionItem;
}

export class EnhancedTableHead extends React.Component<TableHeadProps, any> {
  /**
   * 创建排序表头
   * @param property
   */
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const {onSelectAllClick, order, orderBy, numSelected, rowCount, columns, selection} = this.props;
    const isSelection = objectPath.get(selection, 'type');
    return (
      <TableHead>
        <TableRow>
          {
            (isSelection && isSelection === 'checkbox') && (
              <TableCell padding="checkbox">
                <Checkbox indeterminate={numSelected > 0 && numSelected < rowCount}
                          checked={numSelected === rowCount}
                          onChange={onSelectAllClick}
                />
              </TableCell>
            )
          }
          {columns.map(
            (row) => (
              <TableCell key={row.id}
                         align={row.align}
                         padding={row.disablePadding ? 'none' : 'default'}
                         sortDirection={orderBy === row.id ? order : false}
              >
                <Tooltip title="Sort"
                         placement={row.numeric ? 'bottom-end' : 'bottom-start'}
                         enterDelay={300}
                >
                  <TableSortLabel active={orderBy === row.id}
                                  direction={order}
                                  onClick={this.createSortHandler(row.id)}
                  >
                    {row.label}
                  </TableSortLabel>
                </Tooltip>
              </TableCell>
            ),
            this
          )}
        </TableRow>
      </TableHead>
    );
  }
}
