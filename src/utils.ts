// typo
export const promisefy = (fn: Function) => {
  return function (...args: any[]) {
    return new Promise((resolve, reject) => {
      fn &&
        fn(...args, (err: NodeJS.ErrnoException, data: any) => {
          // 这里要 return，结束这个函数
          if (err) reject(err);
          resolve(data);
        });
    });
  };
};
