import recorditemmodel from '@/models/recorditemmodel';


export default {
  recordList: recorditemmodel.fetch(),
  createRecord(record: RecordItem) {recorditemmodel.create(record);}


};
