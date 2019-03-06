/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-06
 */
import * as React from 'react';
import TimeFormatInput from 'material-ui-next-pickers/dist/timepicker';
import { FormHelperText } from '@material-ui/core';
import FormControl from '@material-ui/core/FormControl';

export class PickerTime extends React.Component<any, any> {

  render() {
    const {
      input,
      meta,
      variant,
      label,
    } = this.props;
    // 是否存在错误验证信息
    const isError = meta && meta.touched && (meta.error || meta.warning);
    console.log(isError);
    return (
      <FormControl variant={variant}
                   error={Boolean(isError)}
      >
        <TimeFormatInput name=''
                         value={input && input.value}
                         onChange={input && input.onChange}
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
