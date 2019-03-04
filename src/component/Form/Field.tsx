/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-02-26
 */
import * as React from 'react';
import field from 'veigar/Form/field';
import { TextFieldProps } from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import { TextField } from '@sitb/wbs/mui/TextField';
import { autoBind } from '@sitb/wbs/autoBind';

export interface FieldItem {
  /**
   * 表单label
   */
  label: string;
  /**
   *  表单错误信息提示
   */
  missText?: string;
  /**
   * 添加afterDom
   */
  afterElement?: any;
}

// 表单variant类型
export type variantProps = 'standard' | 'filled' | 'outlined';
export type layoutProps = 'vertical' | 'horizontal';

export type FieldCombination = FieldItem & TextFieldProps;

export interface FieldProps {
  fields: Array<FieldCombination>;
  variant?: variantProps;
  layout?: layoutProps;
}

/**
 * @author 田尘殇Sean(sean.snow@live.com) create at 2018/5/4
 */
@autoBind
@field
export class Field extends React.PureComponent<FieldProps, any> {

  renderContent() {
    const {fields, variant, layout = 'horizontal'} = this.props;
    // 根据layout 设置样式
    let fieldStyle: any = {};
    // 根据layout 设置栅格
    let layoutProps: any = {
      xs: 12,
      sm: 12,
      md: 4,
      lg: 2,
      xl: 2
    };
    // 设置垂直layout 设置样式 栅格
    if (layout === 'vertical') {
      layoutProps = {
        xs: 12,
        sm: 12,
        md: 12,
        lg: 12,
        xl: 12
      };
      fieldStyle = {
        width: '100%'
      }
    }
    // 根据layout 设置样式
    return fields.map(({afterElement, ...props}, index) => {
      fieldStyle = afterElement && {width: '70%'} || fieldStyle;
      const GridJustify = afterElement && 'space-between' || 'center';
      const fieldProps: any = {variant, style: fieldStyle, ...props};
      return (
        <Grid item
              key={index}
              container
              justify={GridJustify}
              style={{height: 85}}
              {...layoutProps}
        >
          <TextField {...fieldProps}/>
          {afterElement && afterElement}
        </Grid>
      );
    })
  }

  render() {
    return this.renderContent();
  }
}
