/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-06
 */

import * as React from 'react';
import MateRialField from '@material-ui/core/TextField';

export class TextField extends React.Component<any, any> {
  render() {
    const {
      input: {value, onChange},
      meta: {touched, error, warning},
      variant,
      label
    } = this.props;
    // 是否存在错误验证信息
    const isError = touched && (error || warning);
    return (
      <MateRialField value={value}
                     label={label}
                     variant={variant}
                     onChange={onChange}
                     error={Boolean(isError)}
                     helperText={isError}
      />
    )
  }
}
