import React from 'react';

import Heading from 'components/Heading';

import s from './PokemonCard.module.scss';

interface IPokemonCard {
  name: string;
  attack: number;
  defense: number;
  types: string[];
  image: string;
}

const PokemonCard: React.FC<IPokemonCard> = ({ name, attack, defense, types, image }) => {
  return (
    <div className={s.root}>
      <div className={s.infoWrap}>
        <Heading level={3} className={s.titleName}>
          {name}
        </Heading>
        <div className={s.statWrap}>
          <div className={s.statItem}>
            <div className={s.statValue}>{attack}</div>
            Attack
          </div>
          <div className={s.statItem}>
            <div className={s.statValue}>{defense}</div>
            Defense
          </div>
        </div>
        <div className={s.labelWrap}>
          {types.map((type: string) => (
            <span key={type} className={s.label}>
              {type}
            </span>
          ))}
        </div>
      </div>
      <div className={s.pictureWrap}>
        <img src={image} alt={name} />
      </div>
    </div>
  );
};

export default PokemonCard;
