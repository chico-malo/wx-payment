/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-05
 */
import * as React from 'react';
import ReactDOM from 'react-dom';

import MaterialSelect from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { OutlinedInput } from '@material-ui/core';
import FormHelperText from '@material-ui/core/es/FormHelperText';
import { withStyles } from '@sitb/wbs/mui/withStyles';


const styles = theme => ({
  control: {
    width: '100%'
  }
});

@withStyles(styles)
export class Select extends React.Component<any, any> {
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

  renderOptionDOM(options) {
    let DEFAULT_DOM: any = [
      <MenuItem value="" key="default-0"><em>无数据</em></MenuItem>
    ];
    options.forEach((item, index) => {
      DEFAULT_DOM.push(
        <MenuItem value={item.value}
                  key={index}
        >{item.label}</MenuItem>
      )
    });
    return DEFAULT_DOM;
  }

  render() {
    const {
      classes,
      input,
      meta,
      variant,
      label,
      options
    } = this.props;
    // 是否存在错误验证信息
    const isError = meta && meta.touched && (meta.error || meta.warning);
    return (
      <FormControl variant={variant}
                   error={Boolean(isError)}
                   className={classes.control}
      >
        <InputLabel htmlFor="outlined-age-simple"
                    ref={ref => this.InputLabelRef = ref}
        >
          {label}
        </InputLabel>
        <MaterialSelect input={
          <OutlinedInput labelWidth={this.state.labelWidth}
                         name="age"
                         id="outlined-age-simple"
          />
        }
                        onChange={input && input.onChange}
                        value={input && input.value}
        >
          {this.renderOptionDOM(options)}
        </MaterialSelect>
        {
          isError && <FormHelperText>{isError}</FormHelperText>
        }
      </FormControl>
    );
  }
}
