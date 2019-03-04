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
}

// 表单layout类型
export type variantProps = 'standard' | 'filled' | 'outlined';


export type FieldCombination = FieldItem & TextFieldProps;

export interface FieldProps {
  fields: Array<FieldCombination>;
  variant?: variantProps;
}

/**
 * @author 田尘殇Sean(sean.snow@live.com) create at 2018/5/4
 */
@autoBind
@field
export class Field extends React.PureComponent<FieldProps, any> {

  renderContent() {
    const {fields, variant} = this.props;
    return fields.map(({...props}, index) => {
      const newProps: any = {variant, ...props};
      return (
        <Grid item
              xs={12}
              sm={6}
              md={4}
              lg={2}
              xl={2}
              key={index}
              container
              justify="center"
              style={{height: 85}}
        >
          <TextField {...newProps}/>
        </Grid>
      );
    })
  }

  render() {
    return this.renderContent();
  }
}
