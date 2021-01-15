import { BoiledIndicate } from 'constants/boiled';
import { Storage } from 'helpers/Storage';

export class BoiledDatabase extends Storage {
  static async setIndicator(indicator: BoiledIndicate) {
    await this.setItem(Storage.Key.TIME, indicator);
    return;
  }

  static async getIndicator() {
    return await this.getItem<BoiledIndicate>(Storage.Key.TIME);
  }
}
