import * as React from "react";
import { lighten } from "@material-ui/core/styles/colorManipulator";
import { Grid, Toolbar, Typography } from "@material-ui/core";
import classNames from 'classnames';
import { withStyles } from "../../utils/withStyles";
import { ButtonItem, TopButton } from '../Button/TopButton';

/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-02-25
 * 表单头部扩展bar，结合按钮组
 */

export interface TableButtonProps {
  update: Array<ButtonItem>;
  common: Array<ButtonItem>;
}

export interface AdditionalTableToolbarProps {
  /**
   * 表格标题
   */
  tableTitle: string;
  /**
   * table按钮配置
   */
  tableButton?: TableButtonProps;
}

export interface ParentTableToolbarProps {
  classes?: any;
  /**
   * 选择数量
   */
  numSelected: number;
}

export type TableToolbar = AdditionalTableToolbarProps & ParentTableToolbarProps;

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
  },
});

@withStyles(toolbarStyles)
export class EnhancedTableToolbar extends React.PureComponent<TableToolbar, any> {

  renderButton(tableButton: TableButtonProps) {
    const {numSelected, classes} = this.props;
    // const updateConfig: Array<ButtonItem> = [{
    //   name: '编辑',
    //   icon: EditIcon
    // }, {
    //   name: '删除',
    //   icon: DeleteIcon
    // }];
    //
    // const commonConfig: Array<ButtonItem> = [{
    //   name: '新增',
    //   icon: LibraryAdd
    // }];
    const config = numSelected > 0 ? tableButton.update : tableButton.common;
    return (
      <Grid item
            className={classes.actions}>
        <Grid container
              alignItems="center"
        >
          <TopButton config={config}/>
        </Grid>
      </Grid>
    )
  }

  render() {
    const {numSelected, classes, tableTitle, tableButton} = this.props;
    return (
      <Toolbar className={classNames(classes.root, {
        [classes.highlight]: numSelected > 0
      })}
      >
        <Grid container
              justify="space-between"
              alignItems="center"
        >
          <Grid className={classes.title}
                item
          >
            {numSelected > 0 ? (
              <Typography color="inherit" variant="subtitle1">
                {`${numSelected} 选择`}
              </Typography>
            ) : (
              <Typography variant="h6" id="tableTitle">
                {tableTitle}
              </Typography>
            )}
          </Grid>
          {tableButton && this.renderButton(tableButton)}
        </Grid>
      </Toolbar>
    );
  }
}
