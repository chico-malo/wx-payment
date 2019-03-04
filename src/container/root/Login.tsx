/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-04
 */
import * as React from 'react';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import AccountIcon from '@material-ui/icons/AccountCircle';

import { withStyles } from '../../utils/withStyles';
import { FieldGroup } from '../../component/Form/FieldGroup';
import { lang } from '../../constants/zh-cn';


const styles: any = theme => ({
  root: {
    height: '100vh'
  },
  paper: {
    padding: 24,
    textAlign: 'center'
  },
  content: {
    marginTop: 12,
    marginBottom: 50
  },
  binding: {
    width: '100%',
    marginTop: 24,
    marginBottom: 24
  }
});

@withStyles(styles)
export class Login extends React.Component<any, any> {
  form;

  render() {
    const {classes} = this.props;
    const fieldConfig = [{
      fieldGroup: [{
        fields: [{
          label: lang.merchantNo,
          name: 'merchantNo'
        }, {
          label: lang.verifiedCode,
          name: 'verifiedCode'
        }]
      }]
    }];

    return (
      <Grid container
            justify="center"
            alignItems="center"
            className={classes.root}
      >
        <Paper className={classes.paper}>
          <Grid className={classes.content}>
            <AccountIcon fontSize="large"/>
            <Typography variant="h6" id="tableTitle">
              {'商户服务平台-绑定商户'}
            </Typography>
          </Grid>
          <FieldGroup fieldGroups={fieldConfig}
                      unifiedVariant='standard'
                      layout="vertical"
                      formRef={node => this.form = node}
          />
          <Button variant="contained"
                  color="primary"
                  size="large"
                  className={classes.binding}
          >
            {'绑定'}
          </Button>
        </Paper>
      </Grid>
    )
  }
}
