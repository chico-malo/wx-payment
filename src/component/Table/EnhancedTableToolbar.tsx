import * as React from "react";
import {lighten} from "@material-ui/core/styles/colorManipulator";
import {IconButton, Toolbar, Tooltip, Typography} from "@material-ui/core";
import classNames from 'classnames';
import DeleteIcon from '@material-ui/icons/Delete';
import FilterListIcon from '@material-ui/icons/FilterList';
import {withStyles} from "../../utils/withStyles";

/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-02-25
 * 表单头部扩展bar，结合按钮组
 */

export interface Toolbar {
  classes?: any;
  /**
   * 选择数量
   */
  numSelected: number;
}

const toolbarStyles = theme => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
        color: theme.palette.secondary.main,
        backgroundColor: lighten(theme.palette.secondary.light, 0.85)
      }
      : {
        color: theme.palette.text.primary,
        backgroundColor: theme.palette.secondary.dark
      },
  spacer: {
    flex: '1 1 100%'
  },
  actions: {
    color: theme.palette.text.secondary
  },
  title: {
    flex: '0 0 auto'
  }
});

@withStyles(toolbarStyles)
export class EnhancedTableToolbar extends React.PureComponent<any, any> {
  render() {
    const {numSelected, classes} = this.props;

    return (
      <Toolbar className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
      >
        <div className={classes.title}>
          {numSelected > 0 ? (
            <Typography color="inherit" variant="subtitle1">
              {`${numSelected} 选择`}
            </Typography>
          ) : (
            <Typography variant="h6" id="tableTitle">
              xxx模块
            </Typography>
          )}
        </div>
        <div className={classes.spacer}/>
        <div className={classes.actions}>
          {numSelected > 0 ? (
            <Tooltip title="Delete">
              <IconButton aria-label="Delete">
                <DeleteIcon/>
              </IconButton>
            </Tooltip>
          ) : (
            <Tooltip title="Filter list">
              <IconButton aria-label="Filter list">
                <FilterListIcon/>
              </IconButton>
            </Tooltip>
          )}
        </div>
      </Toolbar>
    );
  }
}
