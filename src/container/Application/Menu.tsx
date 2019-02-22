/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/2/21
 */
import * as React from 'react';
import classNames from 'classnames';
import { autoBind } from '@sitb/wbs/autoBind';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMore from '@material-ui/icons/ExpandMore';
import ExpandLess from '@material-ui/icons/ExpandLess';
import { withStyles } from '../../utils/withStyles';
import { getActions } from '../../core/store';
import { routerPath } from '../../core/router.config';
import { menuConfig } from '../../constants/menuConfig';

const drawerWidth = 240;

const styles: any = theme => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap'
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    overflowX: 'hidden',
    width: theme.spacing.unit * 7 + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9 + 1
    }
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  menuItem: {
    '&:focus': {
      backgroundColor: theme.palette.primary.main,
      '& $primary, & $icon': {
        color: theme.palette.common.white
      }
    }
  },
  primary: {},
  icon: {},
  nested: {
    paddingLeft: theme.spacing.unit * 4
  }
});

@withStyles(styles, {withTheme: true})
@autoBind
export class Menu extends React.PureComponent<any, any> {
  state = {
    collapseOpenKey: ''
  };

  /**
   * 菜单跳转
   * @param path      当前跳转path
   * @param isParent  当前点击是否是父级菜单
   */
  handleClickMenu(path, isParent = false) {
    const {collapseOpenKey} = this.state;
    let newCollapseOpenKey = path;
    // 当跳转的path 存在 collapseOpenKey字符串，表示不需要更改扩展key
    if (collapseOpenKey && path.includes(collapseOpenKey)) {
      newCollapseOpenKey = collapseOpenKey
    }
    if (isParent) {
      // 一直点击父级，需要有toggle效果
      newCollapseOpenKey = collapseOpenKey === path ? '' : path;
    } else {
      // 反之进行路由跳转
      getActions().navigator.navigate(path || routerPath.dashboard);
    }
    this.setState({collapseOpenKey: newCollapseOpenKey});
  }

  /**
   * 渲染菜单
   * @param config        菜单配置文件
   * @param isExtendIcon  是否渲染扩展图标 | 是否包含子级
   */
  renderMenu(config, isExtendIcon = false) {
    const {classes} = this.props;
    const {collapseOpenKey} = this.state;
    return (
      <List>
        {
          config.map((item, index) => {
            // 是否打开折叠，当前存储的path  跟 item path比较
            const isCollapseOpen = collapseOpenKey === item.path;
            return (
              <React.Fragment key={index}>
                <ListItem button
                          key={index}
                          divider={isCollapseOpen}
                          className={classNames(classes.menuItem, isExtendIcon && classes.nested)}
                          onClick={() => this.handleClickMenu(item.path, item.children)}
                >
                  <ListItemIcon className={classes.icon}>
                    <item.icon/>
                  </ListItemIcon>
                  <ListItemText primary={item.name}
                                inset
                                classes={{primary: classes.primary}}
                  />
                  {
                    item.children && (
                      <React.Fragment>
                        {isCollapseOpen ? <ExpandLess className={classes.icon}/> :
                          <ExpandMore className={classes.icon}/>}
                      </React.Fragment>
                    )
                  }
                </ListItem>
                {
                  item.children && (
                    <Collapse in={isCollapseOpen}
                              timeout="auto"
                              unmountOnExit
                    >
                      {this.renderMenu(item.children, true)}
                    </Collapse>
                  )
                }
              </React.Fragment>
            )
          })
        }
      </List>
    )
  }

  render() {
    const {classes, theme, handleMenuClose, menuOpen} = this.props;
    return (
      <Drawer variant="permanent"
              className={classNames(classes.drawer, {
                [classes.drawerOpen]: menuOpen,
                [classes.drawerClose]: !menuOpen
              })}
              classes={{
                paper: classNames({
                  [classes.drawerOpen]: menuOpen,
                  [classes.drawerClose]: !menuOpen
                })
              }}
              open={menuOpen}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleMenuClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
          </IconButton>
        </div>
        <Divider/>
        {this.renderMenu(menuConfig)}
      </Drawer>
    )
  }
}
