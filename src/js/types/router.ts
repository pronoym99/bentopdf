export interface PageModule {
  html: string;
  init(): Promise<void> | void;
}
