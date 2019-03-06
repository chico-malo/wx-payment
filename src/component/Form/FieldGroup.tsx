import { Grid } from '@material-ui/core';
import { Field, FieldProps, layoutProps, variantProps } from './Field';
import * as React from 'react';

/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-04
 */

export interface FieldGroupItemProps {
  fieldGroup: Array<FieldProps>
  title?: string
}

export interface FormGroupProps {
  /**
   * 表单组配置
   */
  fieldGroups: Array<FieldGroupItemProps>;
  /**
   * 表单layout
   */
  unifiedVariant?: variantProps;
  layout?: layoutProps;
  /**
   * 配置表单ref
   * @param node
   */
  formRef: (node) => void;
}

export class FieldGroup extends React.Component<FormGroupProps, any> {

  render() {
    const {fieldGroups, unifiedVariant, layout} = this.props;
    return (
      <Grid>
        {fieldGroups.map(({fieldGroup, title}, index) => (
          <Grid key={index}
                container
                spacing={24}
          >
            <h1>{title}</h1>
            {fieldGroup.map(({...field}: any, idx) => (
              <Field variant={unifiedVariant}
                     layout={layout}
                     key={idx}
                     {...field}
              />
            ))}
          </Grid>
        ))}
      </Grid>
    )
  }
}
