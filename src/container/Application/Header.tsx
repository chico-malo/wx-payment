/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/2/21
 */
import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import Badge from '@material-ui/core/Badge';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';
import { witchStyles } from '../../utils/withStyles';
import { autoBind } from '@sitb/wbs/autoBind';

const styles: any = theme => ({
  root: {
    width: '100%'
  },
  grow: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    }
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex'
    }
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none'
    }
  }
});

/**
 * @author 田尘殇Sean(sean.snow@live.com) create at 2018/10/2
 */
@witchStyles(styles)
@autoBind
export class Header extends React.Component<any, any> {
  state = {
    anchorEl: null,
    mobileMoreAnchorEl: null,
  };

  handleProfileMenuOpen(event) {
    this.setState({anchorEl: event.currentTarget});
  }

  handleMenuClose() {
    this.setState({anchorEl: null});
    this.handleMobileMenuClose();
  }

  /**
   * 移动端菜单 开启
   * @param event
   */
  handleMobileMenuOpen = event => {
    this.setState({mobileMoreAnchorEl: event.currentTarget});
  };

  /**
   * 移动端菜单 关闭
   */
  handleMobileMenuClose() {
    this.setState({mobileMoreAnchorEl: null});
  };

  /**
   * pc端个人模块 下拉菜单
   */
  renderHeaderMenuDrop() {
    const {anchorEl} = this.state;
    const isMenuOpen = Boolean(anchorEl);
    return (
      <Menu anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={this.handleMenuClose}
      >
        <MenuItem onClick={this.handleMenuClose}>{'修改密码'}</MenuItem>
        <MenuItem onClick={this.handleMenuClose}>{'退出'}</MenuItem>
      </Menu>
    )
  }

  /**
   * 移动端顶部菜单 下拉菜单
   * @param config  配置文件
   */
  renderHeaderMobileMenuDrop(config) {
    const {mobileMoreAnchorEl} = this.state;
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);
    const menuContent: any = [];
    config.forEach((item, index) => menuContent.push(
      <MenuItem onClick={this.handleProfileMenuOpen}
                key={index}
      >
        <IconButton color="inherit">
          <Badge badgeContent={11} color="secondary">
            <item.icon/>
          </Badge>
        </IconButton>
        <p>{item.name}</p>
      </MenuItem>
    ));
    return (
      <Menu anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMobileMenuOpen}
            onClose={this.handleMenuClose}
      >
        {menuContent}
      </Menu>
    )
  }

  renderHeaderMenu(config) {
    return config.map((item, index) => (
      <IconButton color="inherit"
                  key={index}
                  {...item.props}
      >
        <Badge badgeContent={4}
               color="secondary"
        >
          <item.icon/>
        </Badge>
      </IconButton>
    ))
  }

  render() {
    const {anchorEl} = this.state;
    const {classes} = this.props;
    const isMenuOpen = Boolean(anchorEl);
    // 移动端下拉菜单配置
    const mobileMenuDropConfig = [{
      name: '消息',
      icon: MailIcon
    }, {
      name: '通知',
      icon: NotificationsIcon
    }, {
      name: '个人信息',
      icon: AccountCircle
    }];
    // 顶部菜单配置文件
    const headerMenuConfig = [{
      icon: MailIcon
    }, {
      icon: NotificationsIcon
    }, {
      icon: AccountCircle,
      props: {
        'aria-owns': isMenuOpen ? 'material-appbar' : undefined,
        'aria-haspopup': "true",
        onClick: this.handleProfileMenuOpen,
        color: "inherit"
      }
    }];
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>
            <IconButton className={classes.menuButton}
                        color="inherit"
                        aria-label="Open drawer"
            >
              <MenuIcon/>
            </IconButton>
            <Typography className={classes.title}
                        variant="h6"
                        color="inherit"
                        noWrap
            >
              {'商户服务平台'}
            </Typography>
            <div className={classes.grow}/>
            <div className={classes.sectionDesktop}>
              {this.renderHeaderMenu(headerMenuConfig)}
            </div>
            <div className={classes.sectionMobile}>
              <IconButton aria-haspopup="true"
                          onClick={this.handleMobileMenuOpen}
                          color="inherit"
              >
                <MoreIcon/>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
        {this.renderHeaderMenuDrop()}
        {this.renderHeaderMobileMenuDrop(mobileMenuDropConfig)}
      </div>
    );
  }
}

