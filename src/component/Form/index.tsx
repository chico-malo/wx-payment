/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-02-26
 */
import * as React from 'react';
import { Button, Paper } from '@material-ui/core';
import Form from 'veigar/Form';
import { autoBind } from '@sitb/wbs/autoBind';
import { withStyles } from '@sitb/wbs/mui/withStyles';
import { TextField } from '@sitb/wbs/mui/TextField';
import { FieldProps } from './Field';

export interface FieldGroup {
  fields: Array<FieldProps>
  title?: string
}

export interface FormProps {
  fieldGroups: Array<FieldGroup>
  classes?: any
}

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  }
});

@withStyles(styles)
@autoBind
export class FormContainer extends React.PureComponent<FormProps, any> {
  form;

  handlePasswordChange() {
    const errorFields = this.form.validate();
    if (errorFields) {
      console.log(errorFields);
      return;
    }
    const values = this.form.getValue();
    console.log(values, this);
  }

  render() {
    const {classes, fieldGroups} = this.props;
    return (
      <Paper>
        <Form ref={node => this.form = node}>
          {fieldGroups.map(({fields, title}, index) => (
            <div key={index} className="form-group">
              <h1>{title}</h1>
              {fields.map(({variant = "outlined", ...field}: any, idx) => (
                <TextField {...field}
                           variant={variant}
                           key={idx}
                />
              ))}
            </div>
          ))}
        </Form>
        <Button variant="contained" className={classes.button}>
          {'清空'}
        </Button>
        <Button variant="contained"
                color="primary"
                className={classes.button}
                onClick={this.handlePasswordChange}
        >
          {'搜索'}
        </Button>
      </Paper>
    );
  }
}
