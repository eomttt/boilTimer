export enum BoiledIndicate {
  SOFT = 'SOFT',
  MIDDLE_SOFT = 'MIDDLE_SOFT',
  MIDDLE = 'MIDDLE',
  MIDDLE_HARD = 'MIDDLE_HARD',
  HARD = 'HARD',
}

export const BoiledTime = {
  [BoiledIndicate.SOFT]: 4,
  [BoiledIndicate.MIDDLE_SOFT]: 6,
  [BoiledIndicate.MIDDLE]: 8,
  [BoiledIndicate.MIDDLE_HARD]: 10,
  [BoiledIndicate.HARD]: 12,
};

export const BoiledText = {
  [BoiledIndicate.SOFT]: 'Soft',
  [BoiledIndicate.MIDDLE_SOFT]: 'Middle Soft',
  [BoiledIndicate.MIDDLE]: 'Middle',
  [BoiledIndicate.MIDDLE_HARD]: 'Middle Hard',
  [BoiledIndicate.HARD]: 'Hard',
};
