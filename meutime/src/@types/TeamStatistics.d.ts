interface Minute {
  total: number | null;
  percentage: string | null;
}

interface Goals {
  for: {
    total: {
      home: number;
      away: number;
      total: number;
    };
    average: {
      home: string;
      away: string;
      total: string;
    };
    minute: {
      '0-15': Minute;
      '16-30': Minute;
      '31-45': Minute;
      '46-60': Minute;
      '61-75': Minute;
      '76-90': Minute;
      '91-105': Minute;
      '106-120': Minute;
    };
  };
}

interface Fixtures {
  played: {
    home: number;
    away: number;
    total: number;
  };
  wins: {
    home: number;
    away: number;
    total: number;
  };
  draws: {
    home: number;
    away: number;
    total: number;
  };
  loses: {
    home: number;
    away: number;
    total: number;
  };
}

interface Lineup {
  formation: string;
  played: number;
}

export interface TeamStatistics {
  fixtures: Fixtures;
  goals: Goals;
  lineups: Lineup[];
}
