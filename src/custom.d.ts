type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: string;
  createAt?: Date;
}
type Recorditemmodel= {
  data: RecordItem[];
  fetch: () => RecordItem[];
  save: () => void;
  create: (record: RecordItem) => void;


}
type Tag = {
  id: string;
  name: string;
}
type TagModel = {

  data: Tag[];
  fetch: () => Tag[];
  save: () => void;
  clone: (stringArray: Tag[]) => Tag[];
  create: (name: string) => 'success' | 'duplicated';
  update: (id: string, name: string) => 'success' | 'duplicated' | 'not found';
  remove: (id: string) => boolean;
}
// type Store ={
//   tagList: Tag[];
//   createTag: (name: string) => void;
//   updateTag: (id: string,name: string) => 'success' | 'duplicated' | 'not found';
//   removeTag: (id: string) => boolean;
//   findTag: (id: string) => Tag;
//   recordList: RecordItem[];
//   createRecord:(record: RecordItem)=>void;
// }