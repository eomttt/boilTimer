import { Button } from 'components/Button';
import { Layout } from 'components/Layout';
import { Timer as TimerComponent } from 'components/Timer';
import { TimerStatus } from 'constants/time';
import React, { useCallback, useState } from 'react';
import { View } from 'react-native';
import Styles from './styles';

export const STORE_TIME = 0.1;

export const Timer = () => {
  const [timerStatus, setTimerStatus] = useState(TimerStatus.STOP);

  const startTimer = useCallback(() => {
    setTimerStatus(TimerStatus.START);
  }, []);

  return (
    <Layout>
      <View style={Styles.timer}>
        <TimerComponent remainTime={STORE_TIME} status={timerStatus} />
      </View>
      <View style={Styles.button}>
        <Button label={'시작'} onClick={startTimer} />
      </View>
    </Layout>
  );
};
