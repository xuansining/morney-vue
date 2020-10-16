type RecordItem = {
  tags: string[];
  notes: string;
  type: string;
  amount: string;
  createAt?: string;
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

type hashTableValue = { title: string | undefined; total?: number; items: RecordItem[] }[]
