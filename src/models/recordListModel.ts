import clone from '@/lib/clone';


const localStorageKeyName = 'recordList';

const recordListModel = {
  data: [] as RecordItem[],
  create(record: RecordItem) {
    const record2: RecordItem = clone(record);
    record2.createdAt = new Date();
    this.data.push(record2);
    this.save();},


  fetch() {
    this.data = JSON.parse(window.localStorage.getItem(localStorageKeyName) || '[]') as RecordItem[];
    return this.data;
  },
  //读数据

  save() {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(this.data));
  }
  //写数据
}

export default recordListModel;
//js改成ts  1.先把后缀改掉 2.加分号 然后看报错 说data后面没加类型，改一下 加上 :RecordItem(放在d.ts结尾的文件里 全局声明，不需要引用）