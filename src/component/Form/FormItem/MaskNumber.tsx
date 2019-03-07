/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-07
 */
import * as React from 'react';
import MaskedInput from 'react-text-mask'
import { withStyles } from '@sitb/wbs/mui/withStyles';
import MateRialField from '@material-ui/core/TextField';

function TextMaskCustom(props) {
  const {inputRef, ...other} = props;
  return (
    <MaskedInput{...other}
                ref={ref => {
                  inputRef(ref ? ref.inputElement : null);
                }}
                mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
    />
  );
}

const styles = theme => ({
  control: {
    width: '100%'
  }
});

@withStyles(styles)
export class MaskNumber extends React.Component<any, any> {


  render() {
    const {
      input,
      meta,
      label,
      variant
    } = this.props;
    // 是否存在错误验证信息
    const isError = meta && meta.touched && (meta.error || meta.warning);
    return (
      <MateRialField value={input && input.value}
                     label={label}
                     variant={variant}
                     onChange={input && input.onChange}
                     error={Boolean(isError)}
                     helperText={isError}
                     InputProps={{
                       inputComponent: TextMaskCustom
                     }}
      />
    )
  }
}
