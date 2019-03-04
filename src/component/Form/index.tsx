/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-02-26
 */
import * as React from 'react';
import { Button, Grid, Paper } from '@material-ui/core';
import { autoBind } from '@sitb/wbs/autoBind';
import { withStyles } from '@sitb/wbs/mui/withStyles';
import { variantProps } from './Field';
import { FieldGroup, FieldGroupItemProps } from './FieldGroup';

export interface FormProps {
  classes?: any;
  /**
   * 表单组配置
   */
  fieldGroups: Array<FieldGroupItemProps>;
  /**
   * 表单layout
   */
  unifiedVariant: variantProps;
  /**
   * 提交表单 函数
   * @param values
   */
  onSubmit?: (values) => void;
  /**
   * 重置表单 函数
   */
  onReset?: () => void;
}

const styles = theme => ({
  paper: {
    marginTop: 24,
    padding: 12
  },
  button: {
    margin: theme.spacing.unit
  }
});

@withStyles(styles)
@autoBind
export class FormContainer extends React.PureComponent<FormProps, any> {
  form;

  static defaultProps = {
    unifiedVariant: 'outlined'
  };

  /**
   * 提交
   */
  onSubmit() {
    const errorFields = this.form.validate();
    if (errorFields) {
      console.log(errorFields);
      return;
    }
    const {onSubmit} = this.props;
    const values = this.form.getValue();
    onSubmit && onSubmit(values);
    console.log('form =>', values);
  }

  /**
   * 重置
   */
  onReset() {
    const {onReset} = this.props;
    this.form.resetValue();
    onReset && onReset();
  }

  render() {
    const {classes, fieldGroups, unifiedVariant} = this.props;
    return (
      <Paper className={classes.paper}>
        <FieldGroup fieldGroups={fieldGroups}
                    unifiedVariant={unifiedVariant}
                    formRef={node => this.form = node}
        />
        <Grid container
              justify="flex-end"
        >
          <Button variant="contained"
                  className={classes.button}
                  onClick={this.onReset}
          >
            {'清空'}
          </Button>
          <Button variant="contained"
                  color="primary"
                  className={classes.button}
                  onClick={this.onSubmit}
          >
            {'搜索'}
          </Button>
        </Grid>
      </Paper>
    );
  }
}
