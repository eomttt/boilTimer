import Realm from 'realm';

interface Schema {
  name: string;
  properties: any;
}

export default class Database {
  static Schema: Schema;

  static write(data: any) {
    return new Promise<any>((resolve, reject) => {
      const realm = new Realm({ schema: [this.Schema] });

      try {
        realm.write(() => {
          realm.create(this.Schema.name, data, true);
          console.log('Realm db write file path:', realm.path);
          resolve();
        });
      } catch (error) {
        console.error('Write error', error);
        reject(error);
      } finally {
        realm.close();
      }
    });
  }

  static async upsert(data: any) {
    this.deleteAll();
    this.write(data);
  }

  static read() {
    const realm = new Realm({ schema: [this.Schema] });
    const data = realm.objects(this.Schema.name);
    console.log('data', data.length);
    realm.close();
    return data;
  }

  static deleteAll() {
    const realm = new Realm({ schema: [this.Schema] });
    realm.write(() => {
      realm.deleteAll();
    });
  }
}
