import * as React from "react";
import { Checkbox, TableCell, TableHead, TableRow, TableSortLabel, Tooltip } from "@material-ui/core";

/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-02-25
 */
export class EnhancedTableHead extends React.Component<any, any> {
  createSortHandler = property => event => {
    this.props.onRequestSort(event, property);
  };

  render() {
    const {onSelectAllClick, order, orderBy, numSelected, rowCount, rows} = this.props;

    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox">
            <Checkbox indeterminate={numSelected > 0 && numSelected < rowCount}
                      checked={numSelected === rowCount}
                      onChange={onSelectAllClick}
            />
          </TableCell>
          {rows.map(
            row => (
              <TableCell key={row.id}
                         align={row.numeric ? 'right' : 'left'}
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
