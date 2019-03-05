/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-05
 */
import * as React from 'react';
import ReactDOM from 'react-dom';
import field, { FieldProps } from 'veigar/Form/field';

import MaterialSelect, { SelectProps as MaterialSelectProps } from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { OutlinedInput } from '@material-ui/core';
import { withStyles } from '@sitb/wbs/mui/withStyles';
import FormHelperText from '@material-ui/core/es/FormHelperText';

export interface SelectProps {
  classes?: any;
  label: string;
}


const styles = theme => ({
  formControl: {
    width: '100%',
    minWidth: 120
  },
  helperText: {
    color: 'red'
  }
});

@field
@withStyles(styles)
export class Select extends React.Component<SelectProps & MaterialSelectProps & FieldProps, any> {
  InputLabelRef: any;

  constructor(props, context) {
    super(props, context);
    this.state = {
      labelWidth: 0
    }
  }

  componentDidMount() {
    // 获取当前label的长度，修改边框
    const InputLabelRef: any = ReactDOM.findDOMNode(this.InputLabelRef);
    this.setState({
      labelWidth: InputLabelRef.offsetWidth
    });
  }

  render() {
    const {error, miss, mismatch, mismatchText, missText, classes, ...props} = this.props;
    Reflect.deleteProperty(props, 'fieldValue');
    let isError = error || miss || mismatch;
    let helperText: any = '';
    if (miss) {
      helperText = missText;
    } else if (mismatch) {
      helperText = mismatchText;
    }
    return (
      <FormControl variant="outlined"
                   className={classes.formControl}
                   error={isError}
      >
        <InputLabel htmlFor="outlined-age-simple"
                    ref={ref => this.InputLabelRef = ref}
        >
          {props.label}
        </InputLabel>
        <MaterialSelect input={
          <OutlinedInput labelWidth={this.state.labelWidth}
                         name="age"
                         id="outlined-age-simple"
          />
        }
                        {...props}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </MaterialSelect>
        {
          helperText && <FormHelperText className={classes.helperText}>{helperText}</FormHelperText>
        }
      </FormControl>
    );
  }
}
