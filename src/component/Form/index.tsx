/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-02-26
 */
import * as React from 'react';
import { Button, Grid, Paper } from '@material-ui/core';
import Form from 'veigar/Form';
import { autoBind } from '@sitb/wbs/autoBind';
import { withStyles } from '@sitb/wbs/mui/withStyles';
import { Field, FieldProps, variantProps } from './Field';

export interface FieldGroup {
  fieldGroup: Array<FieldProps>
  title?: string
}

export interface FormProps {
  classes?: any;
  /**
   * 表单组配置
   */
  fieldGroups: Array<FieldGroup>;
  /**
   * 表单layout
   */
  unifiedVariant: variantProps;
  onSubmit?: (values) => void;
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
        <Form ref={node => this.form = node}>
          {fieldGroups.map(({fieldGroup, title}, index) => (
            <Grid key={index}
                  container
                  spacing={24}
            >
              <h1>{title}</h1>
              {fieldGroup.map(({...field}: any, idx) => (
                <Field variant={unifiedVariant}
                       key={idx}
                       {...field}
                />
              ))}
            </Grid>
          ))}
        </Form>
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
