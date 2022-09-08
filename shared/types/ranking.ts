interface HouseholdRanking {
  place: number;
  electricity: Consumption;
  gas: Consumption;
}

interface Consumption {
  usage: number;
  unit: string;
  co2: number;
}
