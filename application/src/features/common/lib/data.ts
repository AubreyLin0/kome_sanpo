// apiの処理はapiフォルダーにまとめます
export const sampleData = [
  {
    id: "1",
    genre: "中華",
  },
  {
    id: "2",
    genre: "イタリアン",
  },
  {
    id: "3",
    genre: "和食",
  },
  {
    id: "4",
    genre: "フレンチ",
  },
];

export const getSearch = async () => {
  // todo:検索処理を実装する
  return sampleData;
};
