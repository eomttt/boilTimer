import { Button } from 'components/Button';
import { Layout } from 'components/Layout';
import { Timer as TimerComponent } from 'components/Timer';
import React, { useState, useCallback } from 'react';
import { View } from 'react-native';
import { TimerStatus } from 'constants/time';

export const STORE_TIME = 0.1;

export const Timer = () => {
  const [timerStatus, setTimerStatus] = useState(TimerStatus.STOP);

  const startTimer = useCallback(() => {
    setTimerStatus(TimerStatus.START);
  }, []);

  return (
    <Layout>
      <View>
        <TimerComponent remainTime={STORE_TIME} status={timerStatus} />
      </View>
      <View>
        <Button label={'시작'} onClick={startTimer} />
      </View>
    </Layout>
  );
};
