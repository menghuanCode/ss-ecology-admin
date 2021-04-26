export interface HttpResponseData<D = any> {
  code: number;
  message: string;
  errors: string[];
  data: D;
}

export interface HttpResponseError {
  code: number;
  message: string;
  errors: string[];
  data: null;
}
