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
import { getActions } from '../../core/store';

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
    menuOpen: true
  };

  static componentWillMount(): void {
    getActions().session.startQuery();
  }

  /**
   * 打开菜单
   */
  handleMenuOpen() {
    this.setState({menuOpen: true});
  };

  /**
   * 缩小菜单
   */
  handleMenuClose() {
    this.setState({menuOpen: false});
  };

  render() {
    const {classes} = this.props;
    const {menuOpen} = this.state;
    return (
      <div className={classes.root}>
        <CssBaseline/>
        <Header menuOpen={menuOpen}
                handleMenuOpen={this.handleMenuOpen}
        />
        <Menu menuOpen={menuOpen}
              handleMenuClose={this.handleMenuClose}
        />
        <Content menuOpen={menuOpen}/>
      </div>
    )
  }
}
