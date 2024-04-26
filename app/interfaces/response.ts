export interface IResponse<T> {
  info: {
    count: number;
    next: string;
    pages: number;
    prev: string;
  };
  results: T;
}
