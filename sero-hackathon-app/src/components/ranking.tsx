import { Ranking } from "../types/ranking";

export interface RankingProps extends Ranking {}

function RankingCard(props: RankingProps) {
  return (
    <div className="card">
      <div className="card-title">
        <p className="rank">{props.leagueRank}</p>
        <p className="rank-locality">{props.locality}</p>
      </div>
      <div className="card-body">
        <p className="card-co2">{props.co2}</p>
        <p className="card-cost">{props.cost}</p>
        <p className="card-daily-rank">{props.dailyRank}</p>
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
