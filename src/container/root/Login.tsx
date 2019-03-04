/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-04
 */
import * as React from 'react';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import AccountIcon from '@material-ui/icons/AccountCircle';

import { withStyles } from '../../utils/withStyles';
import { FieldGroup, FieldGroupItemProps } from '../../component/Form/FieldGroup';
import { lang } from '../../constants/zh-cn';
import { autoBind } from '@sitb/wbs/autoBind';


const styles: any = theme => ({
  root: {
    height: '100vh'
  },
  paper: {
    padding: 24
  },
  content: {
    marginTop: 12,
    marginBottom: 50,
    textAlign: 'center'
  },
  binding: {
    width: '100%',
    marginTop: 24,
    marginBottom: 24
  }
});

@withStyles(styles)
@autoBind
export class Login extends React.Component<any, any> {
  form;

  handleSend() {
    const errorFields = this.form.validate();
    if (errorFields) {
      return;
    }
    const values = this.form.getValue();
    console.log(values);
  }
  render() {
    const {classes} = this.props;
    const fieldConfig: Array<FieldGroupItemProps> = [{
      fieldGroup: [{
        fields: [{
          label: lang.merchantNo,
          name: 'merchantNo'
        }, {
          label: lang.verifiedCode,
          name: 'verifiedCode',
          afterElement: (
            <Button variant="contained"
                    color="primary"
                    style={{height: 50}}
                    onClick={this.handleSend}
            >
              {'发送验证码'}
            </Button>
          )
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
            <AccountIcon style={{fontSize: 80}}/>
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
