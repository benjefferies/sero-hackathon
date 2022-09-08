import { Ranking } from "../types/ranking";
import "./ranking.css";

export interface RankingProps extends Ranking {}

export function RankingCard(props: RankingProps) {
  return (
    <div className="card">
      <div className="card-title">
        <p className="rank">#{props.leagueRank}</p>
        <p className="rank-locality">{props.locality}</p>
      </div>
      <div className="card-body">
        <p className="card-co2">CO2: {props.co2}kg</p>
        <p className="card-cost">Cost: £{props.cost}</p>
        <p className="card-daily-rank">Daily rank: {props.dailyRank}</p>
        <button
          className="card-view"
          onClick={() => console.log(props.propertyId)}
        >
          View
        </button>
      </div>
    </div>
  );
}
