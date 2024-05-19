import { HttpContext, HttpHeaders, HttpParams } from '@angular/common/http';

export interface OptionsFetch {
  headers?:
    | HttpHeaders
    | {
        [header: string]: string | string[];
      };
  observe: 'body';
  context?: HttpContext;
  params?:
    | HttpParams
    | {
        [param: string]:
          | string
          | number
          | boolean
          | ReadonlyArray<string | number | boolean>;
      };
  reportProgress?: boolean;
  responseType?: 'json';
  withCredentials?: boolean;
  transferCache?:
    | {
        includeHeaders?: string[];
      }
    | boolean;
}

export interface Student {
  id?: number;
  name: string;
  score: number;
  school_class_name: string;
}

export interface Class {
  id?: number;
  name: string;
  quantity?: number;
}
