/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-04
 */
import * as React from 'react';
import { Fab, Tooltip } from '@material-ui/core';
import { withStyles } from '../../utils/withStyles';

export interface ButtonItem {
  name: string;
  icon: any;
}

export interface TopButtonProps {
  classes?: any;
  config: Array<ButtonItem>
}

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit
  }
});

@withStyles(styles)
export class TopButton extends React.Component<TopButtonProps, any> {
  /**
   * 渲染按钮
   */
  renderContent() {
    const {config, classes} = this.props;
    return config.map((item, index) => (
      <Tooltip title={item.name}
               key={index}
      >
        <Fab variant="extended"
             size="small"
             color="primary"
             aria-label="Add"
             className={classes.margin}
        >
          <item.icon/>
          <span className="buttonName">{item.name}</span>
        </Fab>
      </Tooltip>
    ))
  }

  render() {
    return this.renderContent();
  }
}
