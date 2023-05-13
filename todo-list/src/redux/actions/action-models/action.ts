export interface IAction<TPayload> {
  type: string;
  payload?: TPayload;
}
