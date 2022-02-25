export interface WatchValue<T> {
  (callback: (v: T) => void): void;
}

export interface SetWatcherValue<T> {
  (v: T): void;
}

export interface GetWatcherValue<T> {
  (): T;
}

interface WatcherInterface {
  <T>(defaultValue: T): [WatchValue<T>, SetWatcherValue<T>, GetWatcherValue<T>];
}

const Watcher: WatcherInterface = <T>(defaultValue: T) => {
  // Value that will be watched
  let value = defaultValue;

  // Callback that will be called after a value change
  const watchers: Record<string, (v: T) => void> = {};

  /**
   * Add a new callback that will we triggered when value is set via setValue
   * Note: Callback is called immediatly with current value
   */
  const watchValue = (callback: (newValue: T) => void): (() => void) => {
    const id = Math.random();

    callback(value);
    watchers[id] = callback;

    return () => delete watchers[id];
  };

  /**
   * Set new value and trigger all registered callback
   */
  const setValue = (newValue: T): void => {
    value = newValue;
    Object.values(watchers).forEach((cb) => cb(newValue));
  };

  /**
   * Get the current value
   */
  const getValue = (): T => value;

  return [watchValue, setValue, getValue];
};

export default Watcher;
