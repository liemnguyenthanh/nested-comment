import { format } from 'timeago.js';

export const getTimeAgo = (timeStamp: number) => {
  return format(timeStamp, 'vi_VN');
}