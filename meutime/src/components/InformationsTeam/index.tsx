import { PlayerCard } from '../PlayerCard';

import { InfoPlayers, InformationsTeamContainer, Lineup } from './styles';

import dataFake from '../../../data.json';

export function InformationsTeam() {
  return (
    <InformationsTeamContainer>
      <hr />
      <InfoPlayers>
        <h2>Jogadores</h2>
        <div>
          {dataFake.players.map((player) => (
            <PlayerCard player={player} />
          ))}
        </div>
      </InfoPlayers>
      <hr />
      <Lineup>
        <h2>Formação mais utilizada</h2>
        <span>{dataFake.lineups[0].formation}</span>
      </Lineup>
    </InformationsTeamContainer>
  );
}
