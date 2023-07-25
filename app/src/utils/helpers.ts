import { format } from 'timeago.js';

export const getTimeAgo = (timeStamp: number) => {
  return format(timeStamp, 'vi_VN');
}

export const getParamsUrl = (item: any) => {
  return new URLSearchParams(item).toString();
}