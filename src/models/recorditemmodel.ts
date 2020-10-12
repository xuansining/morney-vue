import cloneObj from '@/lib/clone';

type Recorditemmodel= {
  data: RecordItem[];
  fetch: () => RecordItem[];
  save: () => void;
  create: (record: RecordItem) => void;


}
const recorditemmodel: Recorditemmodel = {
  data:[],
  create(record){
    const _record=cloneObj(record);

    _record.createAt=new Date();

    this.data.push(_record);
    this.save();
  },

  fetch() {
    this.data= JSON.parse(window.localStorage.getItem('recordList') || '[]') as RecordItem[];
    return this.data;
  },
  save() {
    const _data=cloneObj(this.data);
    window.localStorage.setItem('recordList',JSON.stringify(_data) );
  }
};
export default recorditemmodel;