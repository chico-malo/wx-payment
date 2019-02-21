/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/2/21
 */
import * as React from 'react';
import classNames from 'classnames';
import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';

import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import { withStyles } from '../../utils/withStyles';
import StarBorder from '@material-ui/icons/StarBorder';
import Collapse from '@material-ui/core/Collapse';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { autoBind } from '@sitb/wbs/autoBind';
import { getActions } from '../../core/store';
import { routerPath } from '../../core/router.config';

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
  icon: {}
});

@withStyles(styles, {withTheme: true})
@autoBind
export class Menu extends React.PureComponent<any, any> {
  state = {
    open: true
  };

  handleClick = () => {
    this.setState(state => ({open: !state.open}));
  };

  handleClickMenu() {
    console.log('test');
    getActions().navigator.navigate(routerPath.tradeQuery);
  }

  render() {
    const {classes, theme, handleMenuClose, open} = this.props;
    return (
      <Drawer variant="permanent"
              className={classNames(classes.drawer, {
                [classes.drawerOpen]: open,
                [classes.drawerClose]: !open
              })}
              classes={{
                paper: classNames({
                  [classes.drawerOpen]: open,
                  [classes.drawerClose]: !open
                })
              }}
              open={open}
      >
        <div className={classes.toolbar}>
          <IconButton onClick={handleMenuClose}>
            {theme.direction === 'rtl' ? <ChevronRightIcon/> : <ChevronLeftIcon/>}
          </IconButton>
        </div>
        <Divider/>
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
            <ListItem button
                      key={text}
                      className={classes.menuItem}
            >
              <ListItemIcon className={classes.icon}>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
              <ListItemText primary={text}
                            classes={{primary: classes.primary}}
              />
            </ListItem>
          ))}
          <ListItem button onClick={this.handleClick}>
            <ListItemIcon>
              <InboxIcon/>
            </ListItemIcon>
            <ListItemText inset primary="Inbox"/>
            {this.state.open ? <ExpandLess/> : <ExpandMore/>}
          </ListItem>
          <Collapse in={this.state.open}
                    timeout="auto"
                    unmountOnExit
          >
            <List disablePadding>
              <ListItem button
                        className={classes.nested}
                        onClick={this.handleClickMenu}
              >
                <ListItemIcon>
                  <StarBorder/>
                </ListItemIcon>
                <ListItemText inset primary="Starred"/>
              </ListItem>
            </List>
          </Collapse>
        </List>
        <Divider/>
        <List>
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button
                      key={text}
                      className={classes.menuItem}
            >
              <ListItemIcon className={classes.icon}>{index % 2 === 0 ? <InboxIcon/> : <MailIcon/>}</ListItemIcon>
              <ListItemText primary={text}
                            classes={{primary: classes.primary}}
              />
            </ListItem>
          ))}
        </List>
      </Drawer>
    )
  }
}
