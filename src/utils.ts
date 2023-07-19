export const promisefy = (fn: Function) => {
  return function (...args: any[]) {
    return new Promise((resolve, reject) => {
      fn &&
        fn(...args, (err: NodeJS.ErrnoException, data: any) => {
          if (err) reject(err);
          resolve(data);
        });
    });
  };
};
