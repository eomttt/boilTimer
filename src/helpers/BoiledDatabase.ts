import Database from 'helpers/Database';

export default class BoiledDatabase extends Database {
  static Schema = {
    name: 'Boiled',
    properties: {
      boiledIndicator: 'string',
    },
  };

  static async saveIndicator(boiledIndicator: string) {
    await this.write({ boiledIndicator });
    return;
  }

  static getIndicator() {
    return this.read();
  }

  static deleteAllIndicator() {
    this.deleteAll();
  }
}
