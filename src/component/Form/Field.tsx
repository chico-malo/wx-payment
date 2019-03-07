/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-02-26
 */
import * as React from 'react';
import { TextFieldProps } from '@material-ui/core/TextField';
import { Grid } from '@material-ui/core';
import { autoBind } from '@sitb/wbs/autoBind';
import { Select, SelectItemProps } from './FormItem/Select';
import { Field as ReduxField } from 'redux-form'
import { TextField } from './FormItem/TextField';
import { PickerDate } from './FormItem/PickerDate';
import { PickerTime } from './FormItem/PickerTime';
import { MaskNumber } from './FormItem/MaskNumber';

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
  options?: Array<SelectItemProps>
}

// 表单variant类型
export type variantProps = 'standard' | 'filled' | 'outlined';
export type layoutProps = 'vertical' | 'horizontal';

export type FieldCombination = FieldItem & TextFieldProps;

export interface FieldProps {
  fields: Array<FieldCombination>;
  variant?: variantProps;
  layout?: layoutProps;
  handleSubmit?: any;
}

const renderComponent = {
  select: Select,
  text: TextField,
  number: MaskNumber,
  date: PickerDate,
  time: PickerTime
};

@autoBind
export class Field extends React.PureComponent<FieldProps, any> {

  filterField(props) {
    const {type, name, ...other} = props;
    const component = type ? renderComponent[type] : renderComponent.text;
    return (
      <ReduxField name={name}
                  component={component}
                  props={...other}
      />
    )
  }

  renderContent() {
    const {fields, variant, layout = 'horizontal', handleSubmit} = this.props;
    // 根据layout 设置样式
    let fieldStyle: any = {width: '100%'};
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
    }
    // 根据layout 设置样式
    return fields.map(({afterElement, ...props}, index) => {
      fieldStyle = afterElement && {width: '60%'} || fieldStyle;
      const GridJustify = afterElement && 'space-between' || 'center';
      const fieldProps: any = {variant, style: fieldStyle, ...props};
      return (
        <Grid item
              key={index}
              container
              justify={GridJustify}
              style={{height: 85, width: '100%', overflow: 'hidden'}}
              {...layoutProps}
        >
          {
            this.filterField(fieldProps)
          }
          {afterElement && afterElement(handleSubmit)}
        </Grid>
      );
    })
  }

  render() {
    return this.renderContent();
  }
}
