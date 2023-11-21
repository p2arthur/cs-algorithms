export interface Timeable {
  fn(n: number): number;
}

export class Timer {
  logTimeElapsed(fn: (n: number) => number | void, n: number) {
    const t1 = performance.now();
    fn(n);
    const t2 = performance.now();

    let timeForFunction = (t2 - t1) / 1000;

    console.log(`Function took ${timeForFunction} seconds`);
  }
}
