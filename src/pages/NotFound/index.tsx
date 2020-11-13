import React, { useCallback } from 'react';
import { navigate } from 'hookrouter';

import Button from 'components/Button';

import { ELink } from 'types/navigation';

import TeamRocket from './assets/TeamRocket.png';

import cx from './NotFound.module.scss';

const NotFound: React.FC = () => {
  const goToHomePage = useCallback(() => navigate(ELink.HOME), []);

  return (
    <div className={cx.root}>
      <div className={cx.title}>404</div>
      <div className={cx.image}>
        <img src={TeamRocket} alt="404" />
      </div>
      <div className={cx.text}>
        The rocket team <span className={cx.black}>has won this time.</span>
      </div>
      <div className={cx.button}>
        <Button color="secondary" onClick={goToHomePage}>
          Return
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
