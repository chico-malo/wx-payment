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
import { getActions } from '../../core/store';


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

  constructor(props, context) {
    super(props, context);
    this.state = {
      countDown: 60
    };
  }

  handleSend() {
    const errorFields = this.form.validate();
    if (errorFields) {
      return;
    }


    // 倒计时
    let time = setInterval(() => {
      // const {processing} = this.props;
      // processing永远都为true，只有发送验证码失败才为false
      if (this.state.countDown === 0) {
        // 解除定时器，重置倒计时
        clearInterval(time);
        this.setState({
          countDown: 60
        });
      } else {
        this.setState({
          countDown: this.state.countDown - 1
        });
      }
    }, 1000);

    const values = this.form.getValue();
    const {merchantNo} = values;
    getActions().session.startSend(merchantNo);
  }
  render() {
    const {classes} = this.props;
    const {countDown} = this.state;
    const fieldConfig: Array<FieldGroupItemProps> = [{
      fieldGroup: [{
        fields: [{
          label: lang.merchantNo,
          name: 'merchantNo',
          required: true,
          missText: '请输入您的商户号'
        }, {
          label: lang.verifiedCode,
          name: 'verifiedCode',
          afterElement: (
            <Button variant="contained"
                    color="primary"
                    style={{height: 50, width: '25%'}}
                    onClick={this.handleSend}
                    disabled={countDown !== 60}
            >
              {countDown !== 60 && countDown || '发送验证码'}
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
