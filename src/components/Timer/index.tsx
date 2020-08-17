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
  const [spendTime, setSpendTime] = useState(0);
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
      timer = setInterval(() => {
        setSpendTime((time) => time + 1);
      }, TIME_INTERVAL);
      return;
    }

    alert('타이머가 진행 중입니다.');
  }, []);

  useEffect(() => {
    setNowTime(setTime - spendTime);
    if (spendTime >= setTime) {
      clearTimer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [spendTime]);

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
