import { User } from 'phosphor-react';

import { PlayerCard } from '../PlayerCard';

import {
  FootballField,
  InfoPlayers,
  InformationsTeamContainer,
  Lineup,
} from './styles';

import dataFake from '../../../data.json';

export function InformationsTeam() {
  const formation = dataFake.lineups[0].formation.split('-');

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
            <div>
              {Array.from({ length: Number(value) }).map(() => (
                <User size={32} weight='fill' />
              ))}
            </div>
          ))}
        </FootballField>
      </Lineup>
    </InformationsTeamContainer>
  );
}
