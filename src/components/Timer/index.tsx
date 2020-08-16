import React, { useMemo, useState, useCallback, useEffect } from 'react';
import { getTimeFormat } from 'utils/time';
import { TimerStatus } from 'constants/time';
import { View, Text } from 'react-native';
import Styles from './styles';

interface TimerProps {
  remainTime: number;
  status: TimerStatus;
}

const TIME_INTERVAL = 1000;
let timer: NodeJS.Timeout | null = null;

export const Timer: React.FunctionComponent<TimerProps> = ({
  remainTime,
  status,
}) => {
  const setTime = useMemo(() => remainTime * 60, [remainTime]);
  const [nowTime, setNowTime] = useState(setTime);
  const viewTime = useMemo(() => {
    const min = getTimeFormat(nowTime / 60);
    const sec = getTimeFormat(nowTime % 60);

    return `${min}:${sec}`;
  }, [nowTime]);

  const clearTimer = useCallback(() => {
    if (timer) {
      clearInterval(timer);
      timer = null;
    }
  }, []);

  const startTimer = useCallback(() => {
    if (!timer) {
      let spendInterval = 0;
      timer = setInterval(intervalTime, TIME_INTERVAL);

      function intervalTime() {
        spendInterval += 1;
        setNowTime(setTime - spendInterval);
        if (spendInterval >= setTime) {
          clearTimer();
        }
      }
      return;
    }

    alert('타이머가 진행 중입니다.');
  }, [setTime, clearTimer]);

  useEffect(() => {
    return () => {
      clearTimer();
    };
  }, [clearTimer]);

  useEffect(() => {
    if (status === TimerStatus.START) {
      startTimer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [status]);

  return (
    <View style={Styles.container}>
      <Text style={Styles.text}>{viewTime}</Text>
    </View>
  );
};
