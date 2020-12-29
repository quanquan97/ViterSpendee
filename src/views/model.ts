

const localStorageKeyName = 'recordList';

const model = {
clone(data: RecordItem[]| RecordItem){  return JSON.parse(JSON.stringify(data))},


  fetch() {
    return JSON.parse(window.localStorage.getItem(localStorageKeyName
    ) || '[]') as RecordItem[];
  },
  //读数据


  save(data: RecordItem[]) {
    window.localStorage.setItem(localStorageKeyName, JSON.stringify(data));
  }  //写数据
};

export {model};
//js改成ts  1.先把后缀改掉 2.加分号 然后看报错 说data后面没加类型，改一下 加上 :RecordItem(放在d.ts结尾的文件里 全局声明，不需要引用）