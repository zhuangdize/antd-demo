export const emailPattern = /^([a-zA-Z\d][\w-]{2,})@(\w{2,})\.([a-z]{2,})(\.[a-z]{2,})?$/;

export const phonePattern = /^1[3|4|5|7|8]\d{9}$/;

/** 日期格式，如：1999-02-02 */
export const datePattern = 'YYYY-MM-DD';

/** 时间格式，如：1999-02-02 24:39:39 */
export const timePattern = `${datePattern} HH:mm:ss`;
