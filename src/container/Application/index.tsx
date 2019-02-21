/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/2/21
 */
import * as React from 'react';
import { autoBind } from '@sitb/wbs/autoBind';
import { Header } from './Header';
import CssBaseline from '@material-ui/core/CssBaseline';
import { withStyles } from '../../utils/withStyles';
import { Menu } from './Menu';
import { Content } from './Content';

const styles: any = theme => ({
  root: {
    width: '100%',
    display: 'flex'
  }
});

@withStyles(styles)
@autoBind
export class Application extends React.PureComponent<any, any> {
  state = {
    open: false
  };

  /**
   * 打开菜单
   */
  handleMenuOpen() {
    this.setState({open: true});
  };

  /**
   * 缩小菜单
   */
  handleMenuClose() {
    this.setState({open: false});
  };

  render() {
    const {classes} = this.props;
    const {open} = this.state;
    return (
      <div className={classes.root}>
        <CssBaseline/>
        <Header open={open}
                handleMenuOpen={this.handleMenuOpen}
        />
        <Menu open={open}
              handleMenuClose={this.handleMenuClose}
        />
        <Content/>
      </div>
    )
  }
}
