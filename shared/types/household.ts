interface Household {
  electricity: Consumption;
  gas: Consumption;
}

interface Consumption {
  usage: number;
  unit: string;
  co2: number;
}
