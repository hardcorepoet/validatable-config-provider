export type ClassCtor<T> = {
  new (...args: any[]): T;
};

export abstract class ValidatableConfigProvider {
  /** Gets deserialized config section
   * @param  {ClassCtor<T>} cls class constructor representing configuration section
   * @param  {string} configPath path to section config
   * @returns T
   * @throws will throw an error if config does not exist or if it fails validation
   */
  abstract getSection<T extends object>(
    cls: ClassCtor<T>,
    configPath: string
  ): T;

  /** Gets plain value for configuration path
   * @param  {string} configPath path to section config
   * @returns any
   * @throws will throw an error if config does not exist
   */
  abstract getPlainValue(configPath: string): any;
}
