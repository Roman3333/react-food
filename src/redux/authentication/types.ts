export type AuthType = {
  data: any;
  status: string;
};

export enum Status {
  LOADING = 'loading',
  SUCCESS = 'sucsess',
  ERROR = 'error',
}
