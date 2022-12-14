import morgan from "morgan";
import clc from "cli-color";
import { Request, Response } from "express";
import { formatMorganDate } from "../../utils/utils.utils";

export const morganMdw = (tokens: any, req: Request, res: Response) => {
  const getStatusColor = (status: number) => {
    if (status >= 500) {
      return clc.red(status)
    } else if (status >= 400) {
      return clc.yellow(status)
    } else if (status >= 300) {
      return clc.cyan(status)
    } else if (status >= 200) {
      return clc.green(status)
    } 
    return status;
  }

  return [
    clc.magenta('\n-------------------------------\n Morgan response description :\n-------------------------------'), 
    clc.cyan('\nStatus code :'),
    getStatusColor(Number(tokens.status(req, res))),
    clc.cyan('\nContent length :'),
    tokens.res(req, res, 'content-length'), 
    clc.cyan('\nResponse time'),
    tokens['response-time'](req, res), 'ms',
    clc.cyan('\nDate :'),
    formatMorganDate(tokens.date(req, res)),
    clc.cyan('\nContent-type :'),
    tokens.res(req, res, 'content-type')
  ].join(' ')
}