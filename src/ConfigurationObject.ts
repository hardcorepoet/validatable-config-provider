export interface ConfigurationObject {
  get<T>(path: string): T;
}