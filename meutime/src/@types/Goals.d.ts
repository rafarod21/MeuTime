interface Minute {
  total: number | null;
  percentage: string;
}

export interface Goals {
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
