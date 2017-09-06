export class ASBalanceTournament {
  date: string;
  course: string;
  cost: number;
}

export class ASBalancePlayer {
  name: string;
  amountPaid: number;
  dues: number;
  costs: number[];
  total: number;
}

export class ASBalance {
  lastUpdated: string;
  dues: number;
  total: number;
  tournaments: ASBalanceTournament[] = [];
  players: ASBalancePlayer[] = [];
}