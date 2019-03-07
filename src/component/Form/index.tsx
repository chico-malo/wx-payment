/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-02-26
 */
import * as React from 'react';
import { Button, CircularProgress, Grid, Paper } from '@material-ui/core';
import { autoBind } from '@sitb/wbs/autoBind';
import { withStyles } from '@sitb/wbs/mui/withStyles';
import { reduxForm } from 'redux-form'
import { Field, FieldProps, layoutProps, variantProps } from './Field';
import { PaperProps } from '@material-ui/core/es/Paper';


export interface FieldGroupItemProps {
  group: Array<FieldProps>
  title?: string
}

export interface AdditionalForm {
  classes?: any;
  /**
   * 表单组配置
   */
  fieldGroups: Array<FieldGroupItemProps>;
  /**
   * 表单layout
   */
  unifiedVariant?: variantProps;
  layout?: layoutProps;
  /**
   * 提交表单 函数
   * @param values
   */
  onSubmit: (...values) => void;
  /**
   * 重置表单 函数
   */
  onReset?: () => void;
  formContainerProps?: PaperProps;
  /**
   * 以下是reduxForm部分的props，依赖中没有定义，更多详细https://redux-form.com/6.6.2/docs/api/props.md/
   */
  reset?: () => void;
  handleSubmit?: (onSubmit) => any;
  // onSubmit函数调用时才触发的 表单拦截
  submitting?: boolean;
  // 表单为初始值时 为true
  pristine?: boolean;
  submitProcessing?: boolean;
}

export type FormProps = AdditionalForm;

const styles = theme => ({
  paper: {
    marginTop: 24,
    padding: 12
  },
  button: {
    margin: theme.spacing.unit
  },
  loading: {
    color: '#6798e5',
    animationDuration: '550ms'
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
export class FormContainer extends React.PureComponent<FormProps, any> {
  static defaultProps = {
    unifiedVariant: 'outlined'
  };

  /**
   * 重置
   */
  onReset() {
    const {onReset, reset} = this.props;
    reset && reset();
    onReset && onReset();
  }

  fieldGroup() {
    const {fieldGroups, unifiedVariant, layout, handleSubmit} = this.props;
    return fieldGroups.map(({group, title}, index) => (
      <Grid key={index}
            container
            spacing={24}
      >
        <h1>{title}</h1>
        {group.map(({...field}: any, idx) => (
          <Field variant={unifiedVariant}
                 layout={layout}
                 key={idx}
                 handleSubmit={handleSubmit && handleSubmit}
                 {...field}
          />
        ))}
      </Grid>
    ));
  }

  /**
   * 渲染按钮组
   */
  buttonGroup() {
    const {classes, handleSubmit, pristine, submitting, onSubmit, submitProcessing} = this.props;
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
                onClick={handleSubmit && handleSubmit(onSubmit)}
        >
          {
            submitProcessing && (
              <CircularProgress variant="indeterminate"
                                disableShrink
                                className={classes.loading}
                                size={24}
                                thickness={4}
              />
            ) || '绑定'
          }
        </Button>
      </Grid>
    )
  }

  render() {
    const {classes, formContainerProps} = this.props;

    return (
      <Paper className={classes.paper}
             {...formContainerProps}
      >
        <Grid>
          {this.fieldGroup()}
        </Grid>
        {this.buttonGroup()}
      </Paper>
    );
  }
}
