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
import { reduxForm } from 'redux-form'

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


const validate = values => {
  const errors: any = {};
  if (!values.username) {
    errors.username = 'Required'
  } else if (values.username.length > 15) {
    errors.username = 'Must be 15 characters or less'
  }
  if (!values.selectText) {
    errors.selectText = 'Required'
  } else if (values.selectText.length > 15) {
    errors.selectText = 'Must be 15 characters or less'
  }
  if (!values.startAt) {
    errors.startAt = 'startAtstartAtstartAt';
  }
  return errors
};

const warn = values => {
  const warnings: any = {};
  if (values.age < 19) {
    warnings.age = 'Hmm, you seem a bit young...'
  }
  return warnings
};

@reduxForm({
  form: 'simple', // a unique identifier for this form
  warn,
  validate
})
@withStyles(styles)
@autoBind
export class FormContainer extends React.PureComponent<any, any> {
  form;

  static defaultProps = {
    unifiedVariant: 'outlined'
  };


  /**
   * 重置
   */
  onReset() {
    const {onReset, reset} = this.props;
    reset();
    onReset && onReset();
  }

  /**
   * 渲染按钮组
   */
  buttonGroup() {
    const {classes, handleSubmit, pristine, submitting, onSubmit} = this.props;
    return (
      <Grid container
            justify="flex-end"
      >
        <Button variant="contained"
                className={classes.button}
                disabled={pristine || submitting}
                onClick={this.onReset}
        >
          {'清空'}
        </Button>
        <Button variant="contained"
                color="primary"
                className={classes.button}
                disabled={pristine || submitting}
                onClick={handleSubmit(onSubmit)}
        >
          {'搜索'}
        </Button>
      </Grid>
    )
  }

  render() {
    const {classes, fieldGroups, unifiedVariant} = this.props;

    return (
      <Paper className={classes.paper}>
        <FieldGroup fieldGroups={fieldGroups}
                    unifiedVariant={unifiedVariant}
                    formRef={node => this.form = node}
        />
        {this.buttonGroup()}
      </Paper>
    );
  }
}
