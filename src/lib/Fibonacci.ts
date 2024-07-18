type IFibonacciConfig = {
  firstSeed: number;
  secondSeed: number;
  resultsCount: number;
};

export class FibonacciUtil {
  public static generate(config: IFibonacciConfig) {
    const { firstSeed, secondSeed, resultsCount } = config;
    const seed = [firstSeed, secondSeed].sort();
    for (let i = 0; i < resultsCount; i++) {
      const sum = seed[seed.length - 1] + seed[seed.length - 2];
      seed.push(sum);
    }
    return seed;
  }
}
