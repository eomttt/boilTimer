import { Button } from 'components/Button';
import { Layout } from 'components/Layout';
import { Timer as TimerComponent } from 'components/Timer';
import { BoiledIndicate, BoiledTime } from 'constants/boiled';
import { TimerStatus } from 'constants/time';
import { BoiledDatabase } from 'helpers/BoiledDatabase';
import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';
import Styles from './styles';

export const Timer = () => {
  const [storedTime, setStoredTime] = useState(0);
  const [timerStatus, setTimerStatus] = useState(TimerStatus.STOP);

  const startTimer = useCallback(() => {
    setTimerStatus(TimerStatus.START);
  }, []);

  useEffect(() => {
    (async () => {
      const savedIndicator = await BoiledDatabase.getIndicator();
      setStoredTime(
        BoiledTime[savedIndicator ? savedIndicator : BoiledIndicate.SOFT],
      );
    })();
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
