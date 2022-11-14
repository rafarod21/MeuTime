import { useEffect, useState } from 'react';
import { User } from 'phosphor-react';
import Chart from 'react-apexcharts';

import { PlayerCard } from '../PlayerCard';

import {
  FootballField,
  GoalsScore,
  InfoPlayers,
  InformationsTeamContainer,
  Lineup,
  ResultGames,
} from './styles';

import dataFake from '../../../data.json';

const TEST_CHART = {
  series: [44, 55, 13, 33, 10],
  labels: ['Apple', 'Mango', 'Orange', 'Watermelon'],
};

interface ChartProps {
  series: number[];
  labels: string[];
}

export function InformationsTeam() {
  const formation = dataFake.lineups[0].formation.split('-');
  const [goalsData, setGoalsData] = useState<ChartProps>({
    series: [],
    labels: [],
  });

  useEffect(() => {
    let goalsDataAux: ChartProps = {
      series: [],
      labels: [],
    };
    for (var [key, value] of Object.entries(dataFake.goals.for.minute)) {
      if (value.total !== null) {
        goalsDataAux.labels.push(`${key} min`);
        goalsDataAux.series.push(value.total);
      }
    }

    setGoalsData(goalsDataAux);
  }, []);

  return (
    <InformationsTeamContainer>
      <hr />

      <InfoPlayers>
        <h2>Jogadores</h2>
        <div>
          {dataFake.players.map((player, index) => (
            <PlayerCard key={index} player={player} />
          ))}
        </div>
      </InfoPlayers>

      <hr />

      <Lineup>
        <h2>Formação mais utilizada</h2>
        <span>{dataFake.lineups[0].formation}</span>
        <FootballField>
          {formation.map((value, index) => (
            <div key={index}>
              {Array.from({ length: Number(value) }).map((value, index) => (
                <User key={index} size={32} weight='fill' />
              ))}
            </div>
          ))}
        </FootballField>
      </Lineup>

      <hr />

      <ResultGames>
        <h2>Resultados</h2>
        <div>
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Em casa</th>
                <th>Fora de casa</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Partidas jogadas</td>
                <td>{dataFake.fixtures.played.home}</td>
                <td>{dataFake.fixtures.played.away}</td>
                <td>{dataFake.fixtures.played.total}</td>
              </tr>
              <tr>
                <td>Ganhou</td>
                <td>{dataFake.fixtures.wins.home}</td>
                <td>{dataFake.fixtures.wins.away}</td>
                <td>{dataFake.fixtures.wins.total}</td>
              </tr>
              <tr>
                <td>Perdeu</td>
                <td>{dataFake.fixtures.loses.home}</td>
                <td>{dataFake.fixtures.loses.away}</td>
                <td>{dataFake.fixtures.loses.total}</td>
              </tr>
              <tr>
                <td>Empatou</td>
                <td>{dataFake.fixtures.draws.home}</td>
                <td>{dataFake.fixtures.draws.away}</td>
                <td>{dataFake.fixtures.draws.total}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </ResultGames>

      <hr />

      <GoalsScore>
        <h2>Média de gols por tempo de jogo</h2>
        <Chart
          type='donut'
          width={400}
          series={goalsData.series}
          options={{
            labels: goalsData.labels,

            dataLabels: {
              enabled: true,
              formatter: function (value, { seriesIndex, dataPointIndex, w }) {
                return goalsData.series[seriesIndex];
              },
            },
            legend: {
              labels: {
                useSeriesColors: true,
              },
            },
            plotOptions: {
              pie: {
                expandOnClick: false,
                donut: {
                  size: '65%',
                  background: 'transparent',
                  labels: {
                    show: true,
                    value: {
                      color: '#FEFDFE',
                    },
                  },
                },
              },
            },
            responsive: [
              {
                breakpoint: 600,
                options: {
                  chart: {
                    width: 350,
                  },
                  plotOptions: {
                    pie: {
                      donut: {
                        size: '65%',
                      },
                    },
                  },
                },
              },
            ],
          }}
        />
      </GoalsScore>
    </InformationsTeamContainer>
  );
}
