/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-07
 */
import * as React from 'react';
import MaskedInput from 'react-text-mask'
import createNumberMask from 'text-mask-addons/dist/createNumberMask'
import emailMask from 'text-mask-addons/dist/emailMask'
import MateRialField from '@material-ui/core/TextField';

function TextMaskCustom(props) {
  const {inputRef, type, ...other} = props;
  // 默认number配置
  let numberMask = createNumberMask({
    prefix: '',
    suffix: '',
    includeThousandsSeparator: false
  });
  // 金额表单
  if (type === 'money') {
    numberMask = createNumberMask({
      prefix: '¥ ',
      suffix: ''
    });
  }
  // 邮箱表单
  if (type === 'email') {
    numberMask = emailMask;
  }
  return (
    <MaskedInput{...other}
                ref={ref => {
                  inputRef(ref ? ref.inputElement : null);
                }}
                mask={numberMask}
    />
  );
}

export class MaskNumber extends React.Component<any, any> {

  render() {
    const {
      input,
      meta,
      label,
      variant,
      style,
      type
    } = this.props;
    // 是否存在错误验证信息
    const isError = meta && meta.touched && (meta.error || meta.warning);
    return (
      <MateRialField value={input && input.value}
                     label={label}
                     variant={variant}
                     style={style}
                     onChange={input && input.onChange}
                     error={Boolean(isError)}
                     helperText={isError}
                     type={type}
                     InputProps={{
                       inputComponent: TextMaskCustom
                     }}
      />
    )
  }
}
