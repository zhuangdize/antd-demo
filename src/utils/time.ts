import moment from 'moment';

export const quickPickerDatas = [
  {
    showName: '今日',
    getStartDate: () => moment().startOf('day'),
    getEndDate: () => moment().endOf('day'),
  },
  {
    showName: '昨日',
    getStartDate: () => moment().subtract(1, 'days').startOf('day'),
    getEndDate: () => moment().subtract(1, 'days').endOf('day'),
  },
  {
    showName: '本周',
    getStartDate: () => moment().startOf('week'),
    getEndDate: () => moment().endOf('week').set('hours', 23),
  },
  {
    showName: '上周',
    getStartDate: () => moment()
      .week(moment().week() - 1)
      .startOf('week'),
    getEndDate: () => moment()
      .week(moment().week() - 1)
      .endOf('week')
      .set('hours', 23),
  },
  {
    showName: '过去七天',
    getStartDate: () => moment().subtract(6, 'days').startOf('day'),
    getEndDate: () => moment().subtract(0, 'days').endOf('day'),
  },
  {
    showName: '过去14天',
    getStartDate: () => moment().subtract(13, 'days').startOf('day'),
    getEndDate: () => moment().subtract(0, 'days').endOf('day'),
  },
  {
    showName: '最近5分钟',
    getStartDate: () => moment().subtract(5, 'minutes'),
    getEndDate: () => moment(),
  },
  {
    showName: '最近15分钟',
    getStartDate: () => moment().subtract(15, 'minutes'),
    getEndDate: () => moment(),
  },
  {
    showName: '最近1小时',
    getStartDate: () => moment().subtract(1, 'hour'),
    getEndDate: () => moment(),
  },
  {
    showName: '最近3小时',
    getStartDate: () => moment().subtract(3, 'hour'),
    getEndDate: () => moment(),
  },
  {
    showName: '最近6小时',
    getStartDate: () => moment().subtract(6, 'hour'),
    getEndDate: () => moment(),
  },
  {
    showName: '最近12小时',
    getStartDate: () => moment().subtract(12, 'hour'),
    getEndDate: () => moment(),
  },
  {
    showName: '最近24小时',
    getStartDate: () => moment().subtract(24, 'hour'),
    getEndDate: () => moment(),
  },
];

export const less_days = [
  '今日',
  '昨日',
  '本周',
  '上周',
  '过去七天',
  '过去14天',
  '最近5分钟', '最近15分钟', '最近1小时', '最近3小时', '最近6小时', '最近12小时', '最近24小时',
];

export const getDurationText = (start: any, end: any, quickType: string) => {
  // console.log(moment().subtract(1, 'days').startOf('day').format('YYYY-MM-DD HH:mm:ss'));
  if (less_days.includes(quickType)) {
    return quickType;
  }
  return `${start.format('YYYY-MM-DD HH:mm:ss')} - ${end.format('YYYY-MM-DD HH:mm:ss')}`;
};

export const getTimeIntervalUnit = (start: any, end: any) => {
  const duration = moment.duration(end.diff(start));

  if (duration.asHours() >= 1 && duration.asHours() <= 24) {
    return { unit: 'h', format: 'HH:mm' };
  } if (duration.asMinutes() === 5) {
    return { unit: 'm', format: 'HH:mm:ss' };
  } if (duration.asMinutes() >= 1 && duration.asMinutes() <= 60) {
    return { unit: 'm', format: 'HH:mm' };
  } if (duration.asSeconds() >= 1 && duration.asSeconds() <= 60) {
    return { unit: 's', format: 'HH:mm' };
  } if (duration.asDays() > 1) {
    return { unit: 'd', format: 'MM/DD HH:mm' };
  } if (duration.asYears() >= 1) {
    return { unit: 'y', format: 'YYYY-MM' };
  }
  return { unit: 'h', format: 'HH:mm' };
};
