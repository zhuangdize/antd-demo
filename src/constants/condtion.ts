export const alarmRuleTypeOptions = [
  {
    value: 'avg',
    label: '平均值（avg）',
  },
  {
    value: 'min',
    label: '最小值（min）',
  },
  {
    value: 'max',
    label: '最大值（max）',
  },
  {
    value: 'sum',
    label: '求和（sum）',
  },
  {
    value: 'count',
    label: '统计（count）',
  },
  {
    value: 'last',
    label: '最新值（last）',
  },
];

export enum AlarmRuleOperate {
  /** 大于 */
  gt = 'gt',
  /** 小于 */
  lt = 'lt',
  /** 不在此范围 */
  outside = 'outside_range',
  /** 在此范围 */
  inside = 'within_range',
  /** 没有值 */
  null = 'no_value',
}

export const alarmRuleOperateOptions = [
  {
    value: AlarmRuleOperate.gt,
    label: '大于',
  },
  {
    value: AlarmRuleOperate.lt,
    label: '小于',
  },
  {
    value: AlarmRuleOperate.outside,
    label: '不在范围内',
  },
  {
    value: AlarmRuleOperate.inside,
    label: '在此范围内',
  },
  {
    value: AlarmRuleOperate.null,
    label: '没有值',
  },
];

export const alarmRuleCompOptions = [
  { label: '或', value: 'or' },
  { label: '且', value: 'and' },
];

export enum AlarmLevel {
  critical = 'critical',
  error = 'error',
  warning = 'warning',
}

export const alarmLevelOptions: { label: string; value: AlarmLevel; key: number }[] = [
  { label: '普通', value: AlarmLevel.warning, key: 1 },
  { label: '警告', value: AlarmLevel.error, key: 2 },
  { label: '紧急', value: AlarmLevel.critical, key: 3 },
];
