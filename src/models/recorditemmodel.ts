const recorditemmodel = {
  clone(object: RecordItem | RecordItem[]) {
    return JSON.parse(JSON.stringify(object));
  },
  fetch() {
    return JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
  },
  save(data: RecordItem[] | RecordItem) {
    window.localStorage.setItem('recordList', JSON.stringify(data));
  }
};
export default recorditemmodel;