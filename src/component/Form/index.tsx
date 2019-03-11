/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-02-26
 */
import * as React from 'react';
import { Button, CircularProgress, Grid, Paper } from '@material-ui/core';
import { autoBind } from '@sitb/wbs/autoBind';
import { withStyles } from '@sitb/wbs/mui/withStyles';
import { Field, FieldProps, layoutProps, variantProps } from './Field';
import { PaperProps } from '@material-ui/core/es/Paper';
import { ButtonProps } from '@material-ui/core/Button';


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
   * 表单 variant
   * 封装form组件 layout
   */
  unifiedVariant?: variantProps;
  layout?: layoutProps;
  /**
   * 是否渲染 重置按钮
   * 重置表单 函数
   */
  reseated?: boolean;
  onReset?: () => void;
  formContainerProps?: PaperProps;

  /**
   * 提交按钮 props
   * 按钮名称
   * 提交按钮 loading状态
   * 提交函数
   */
  formSubmitButtonProps?: ButtonProps;
  formSubmitButtonName?: string;
  formSubmitProcessing: boolean;
  onSubmit: (values) => void;

  /**
   * 以下是reduxForm部分的props，依赖中没有定义，更多详细https://redux-form.com/6.6.2/docs/api/props.md/
   */
  reset?: () => void;
  handleSubmit?: (onSubmit) => any;
  // onSubmit函数调用时才触发的 表单拦截
  submitting?: boolean;
  // 表单为初始值时 为true
  pristine?: boolean;
}

export type FormProps = AdditionalForm;

const styles = theme => ({
  paper: {
    marginTop: 24,
    padding: 12
  },
  buttonContainer: {
    marginTop: 10
  },
  button: {
    margin: theme.spacing.unit
  },
  loading: {
    color: '#6798e5',
    animationDuration: '550ms'
  }
});

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
    const {classes, handleSubmit, pristine, submitting, reseated = true, onSubmit, formSubmitProcessing, formSubmitButtonProps, formSubmitButtonName = '搜索'} = this.props;
    return (
      <Grid container
            className={classes.buttonContainer}
            justify="flex-end"
      >
        {
          reseated && (
            <Button variant="contained"
                    className={classes.button}
                    onClick={this.onReset}
            >
              {'清空'}
            </Button>)
        }
        <Button variant="contained"
                color="primary"
                className={classes.button}
                disabled={pristine || submitting}
                onClick={handleSubmit && handleSubmit(onSubmit)}
                {...formSubmitButtonProps}
        >
          {
            formSubmitProcessing && (
              <CircularProgress variant="indeterminate"
                                disableShrink
                                className={classes.loading}
                                size={24}
                                thickness={4}
              />
            ) || formSubmitButtonName
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
