/**
 * Copyright: Copyright (C) 2018 sitb.software,All Rights Reserved
 * author: yangyao(873241789@qq.com)
 * date: 2019-03-12
 */

import { firstMerchantNo } from '../../../constants/select/merchantNo';

// 默认值
export const initialValues = {
  merchantNo: firstMerchantNo(),
  businessTypes: 'ALL'
};
