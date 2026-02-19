export type Result<T> = {
  success: true;
  code: number;
  message: string;
  data: T;
} | {
  success: false;
  code: number;
  message: string;
}
