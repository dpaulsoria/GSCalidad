import { format } from "date-fns";

export const formatDate = (date: any, formatString) => {
  return format(date, formatString);
};
