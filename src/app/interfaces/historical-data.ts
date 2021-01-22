export interface HistoricalData {
  id: number;
  measureDay: string;
  newCases: number;
  allCases: number;
  deaths: number;
  allCumulative: number;
  recovered: number;
  allRecovered: number;
  activeCases: number;
  hospitalCases: number;
  quarantineCases: number;
  monitoringCases: number;
  occupiedBeds: number;
  respirators: number;
}
