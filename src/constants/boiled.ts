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

export const BoiledImage = {
  [BoiledIndicate.SOFT]: require('assets/images/egg-4.png'),
  [BoiledIndicate.MIDDLE_SOFT]: require('assets/images/egg-6.png'),
  [BoiledIndicate.MIDDLE]: require('assets/images/egg-8.png'),
  [BoiledIndicate.MIDDLE_HARD]: require('assets/images/egg-10.png'),
  [BoiledIndicate.HARD]: require('assets/images/egg-12.png'),
};

export const BoiledText = {
  [BoiledIndicate.SOFT]: 'Soft',
  [BoiledIndicate.MIDDLE_SOFT]: 'Middle Soft',
  [BoiledIndicate.MIDDLE]: 'Middle',
  [BoiledIndicate.MIDDLE_HARD]: 'Middle Hard',
  [BoiledIndicate.HARD]: 'Hard',
};
