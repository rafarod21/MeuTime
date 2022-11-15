import { useContext, useEffect, useState } from 'react';
import { User } from 'phosphor-react';
import Chart from 'react-apexcharts';

import { PlayerCard } from '../PlayerCard';

import { Player } from '../../@types/Player';
import { TeamStatistics } from '../../@types/TeamStatistics';

import { FootballContext } from '../../contexts/FootballContext';

import { apiFootball } from '../../lib/apiFootball';

import {
  FootballField,
  GoalsScore,
  InfoPlayers,
  InformationsTeamContainer,
  Lineup,
  ResultGames,
} from './styles';

// import dataFake from '../../../data.json';
import playersData from '../../../playersData.json';
import teamStatisticsData from '../../../teamStatisticsData.json';

interface ChartProps {
  series: number[];
  labels: string[];
}

export function InformationsTeam() {
  const { country, team, season, league } = useContext(FootballContext);
  const [players, setPlayers] = useState<Player[]>();
  const [teamStatistics, setTeamStatistics] = useState<TeamStatistics>();
  const [formation, setFormation] = useState<string[]>([]);
  const [goalsData, setGoalsData] = useState<ChartProps>({
    series: [],
    labels: [],
  });

  useEffect(() => {
    async function getPlayersByTeamSeasonLeague() {
      try {
        if (team && league) {
          // const data = playersData;
          const { data } = await apiFootball.get('players', {
            params: {
              team: team.id,
              league: league.league.id,
              season,
            },
          });

          console.log('Players', data);

          if (data.response.length > 0) {
            const responsePlayers: Player[] = data.response.map(
              (playerObj: { player: Player }) => playerObj.player
            );

            setPlayers(responsePlayers);
          } else {
            console.log(data);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }

    async function getStatisticsByTeamSeasonLeague() {
      try {
        if (team && league) {
          // const data = teamStatisticsData;
          const { data } = await apiFootball.get('teams/statistics', {
            params: {
              team: team.id,
              league: league.league.id,
              season,
            },
          });

          console.log('TeamStatistics', data);

          if (data.response?.lineups) {
            const responseTeamStatistics = data.response as TeamStatistics;

            setTeamStatistics(responseTeamStatistics);

            let goalsDataAux: ChartProps = {
              series: [],
              labels: [],
            };

            for (var [key, value] of Object.entries(
              responseTeamStatistics.goals.for.minute
            )) {
              if (value.total !== null) {
                goalsDataAux.labels.push(`${key} min`);
                goalsDataAux.series.push(value.total);
              }
            }

            setGoalsData(goalsDataAux);
            setFormation(
              responseTeamStatistics.lineups[0].formation.split('-')
            );
          } else {
            console.log(data);
          }
        }
      } catch (error) {
        console.log(error);
      }
    }

    getPlayersByTeamSeasonLeague();
    getStatisticsByTeamSeasonLeague();
  }, []);

  return (
    <InformationsTeamContainer>
      {teamStatistics && players && (
        <>
          <div>
            <hr />

            <InfoPlayers>
              <h2>Jogadores</h2>
              <div>
                {players &&
                  players.map((player, index) => (
                    <PlayerCard key={index} player={player} />
                  ))}
              </div>
            </InfoPlayers>
          </div>

          <div>
            <hr />

            <Lineup>
              <h2>Formação mais utilizada</h2>
              <span>{teamStatistics.lineups[0].formation}</span>
              <FootballField>
                {formation.map((value, index) => (
                  <div key={index}>
                    {Array.from({ length: Number(value) }).map(
                      (value, index) => (
                        <User key={index} size={32} weight='fill' />
                      )
                    )}
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
                      <td>{teamStatistics.fixtures.played.home}</td>
                      <td>{teamStatistics.fixtures.played.away}</td>
                      <td>{teamStatistics.fixtures.played.total}</td>
                    </tr>
                    <tr>
                      <td>Ganhou</td>
                      <td>{teamStatistics.fixtures.wins.home}</td>
                      <td>{teamStatistics.fixtures.wins.away}</td>
                      <td>{teamStatistics.fixtures.wins.total}</td>
                    </tr>
                    <tr>
                      <td>Perdeu</td>
                      <td>{teamStatistics.fixtures.loses.home}</td>
                      <td>{teamStatistics.fixtures.loses.away}</td>
                      <td>{teamStatistics.fixtures.loses.total}</td>
                    </tr>
                    <tr>
                      <td>Empatou</td>
                      <td>{teamStatistics.fixtures.draws.home}</td>
                      <td>{teamStatistics.fixtures.draws.away}</td>
                      <td>{teamStatistics.fixtures.draws.total}</td>
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
                    formatter: function (
                      value,
                      { seriesIndex, dataPointIndex, w }
                    ) {
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
          </div>
        </>
      )}
    </InformationsTeamContainer>
  );
}
