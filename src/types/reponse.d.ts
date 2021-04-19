
export interface HttpResponseData<D=any> {
  code: number;
  message: string;
  errors: Array<string>
  data: D
}

export interface HttpResponseError {
  code: number;
  message: string;
  errors: Array<string>
  data: null
}
