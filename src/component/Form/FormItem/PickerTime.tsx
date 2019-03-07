/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-06
 */
import * as React from 'react';
import TimeFormatInput from 'material-ui-next-pickers/dist/timepicker';
import { FormHelperText } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';
import { withStyles } from '@sitb/wbs/mui/withStyles';


const styles = theme => ({
  control: {
    width: '100%'
  }
});

@withStyles(styles)
export class PickerTime extends React.Component<any, any> {

  render() {
    const {
      input,
      meta,
      variant,
      label,
      classes
    } = this.props;
    // 是否存在错误验证信息
    const isError = meta && meta.touched && (meta.error || meta.warning);
    return (
      <FormControl variant={variant}
                   error={Boolean(isError)}
                   className={classes.control}
      >
        <TimeFormatInput name=''
                         value={input && input.value}
                         className={classes.control}
                         onChange={input && input.onChange}
                         FormControlProps={{style: {width: '100%'}}}
                         InputProps={{style: {height: 55}}}
                         variant={variant}
                         label={label}
        />
        {
          isError && <FormHelperText>{isError}</FormHelperText>
        }
      </FormControl>
    )
  }
}
