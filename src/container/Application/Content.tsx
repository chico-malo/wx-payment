/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019/2/21
 */
import * as React from 'react';
import { Typography } from '@material-ui/core';
import { withStyles } from '../../utils/withStyles';

const styles: any = theme => ({
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  }
});

@withStyles(styles)
export class Content extends React.PureComponent<any, any> {
  render() {
    const {classes} = this.props;
    return (
      <main className={classes.content}>
        <div className={classes.toolbar}/>
        <Typography paragraph>
          ullamcorper morbi tincidunt. Lorem donec massa sapien faucibus et molestie ac.
        </Typography>
      </main>
    )
  }
}
