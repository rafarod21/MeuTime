import { Player } from '../../@types/Player';

import { translateCountryNameForName } from '../../utils/translateCountryName';

import { PlayerCardContainer, PlayerDataContent } from './styles';

interface PlayerCardProps {
  player: Player;
}

export function PlayerCard({ player }: PlayerCardProps) {
  const playerName = player.firstname + ' ' + player.lastname;

  return (
    <PlayerCardContainer>
      <img src={player.photo} alt={playerName} />
      <PlayerDataContent>
        <strong>{playerName}</strong>
        <span>{player.age} anos</span>
        <span>{translateCountryNameForName(player.nationality)}</span>
      </PlayerDataContent>
    </PlayerCardContainer>
  );
}
