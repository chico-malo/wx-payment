/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-04
 */
import * as React from 'react';
import { Grid, Paper, Typography } from '@material-ui/core';
import AccountIcon from '@material-ui/icons/AccountCircle';

import { withStyles } from '../../utils/withStyles';


const styles: any = theme => ({
  root: {
    height: '100vh'
  }
});

@withStyles(styles)
export class Login extends React.Component<any, any> {

  render() {
    const {classes} = this.props;
    return (
      <Grid container
            justify="center"
            alignItems="center"
            className={classes.root}
      >
        <Paper>
          <Grid>
            <AccountIcon/>
            <Typography variant="h6" id="tableTitle">
              {'商户服务平台登录'}
            </Typography>

          </Grid>
        </Paper>
      </Grid>
    )
  }
}
