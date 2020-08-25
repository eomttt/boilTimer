import { Button } from 'components/Button';
import { Layout } from 'components/Layout';
import { Timer as TimerComponent } from 'components/Timer';
import { TimerStatus } from 'constants/time';
import React, { useCallback, useState, useEffect } from 'react';
import { View } from 'react-native';
import Styles from './styles';
import BoiledDatabase from 'helpers/BoiledDatabase';
import { BoiledTime, BoiledIndicate } from 'constants/boiled';

export const Timer = () => {
  const [storedTime, setStoredTime] = useState(0);
  const [timerStatus, setTimerStatus] = useState(TimerStatus.STOP);

  const startTimer = useCallback(() => {
    setTimerStatus(TimerStatus.START);
  }, []);

  useEffect(() => {
    const savedIndicator = BoiledDatabase.getIndicator();
    if (savedIndicator.length > 0) {
      // TODO: get BoiledIndicate from savedIndicator
      setStoredTime(BoiledTime[BoiledIndicate.SOFT]);
    }
  }, []);

  return (
    <Layout>
      <View style={Styles.timer}>
        <TimerComponent remainTime={storedTime} status={timerStatus} />
      </View>
      <View style={Styles.button}>
        <Button label={'시작'} onClick={startTimer} />
      </View>
    </Layout>
  );
};
