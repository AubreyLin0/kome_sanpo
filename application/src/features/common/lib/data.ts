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

// const sampleRestaurantData: CardDataType = [
//   {
//     title: "美味しいチャーハンと唐揚げと餃子のお店",
//     category: "中華",
//     distance: "100m",
//     isOpen: true,
//     isLiked: false,
//     openingTime: "20:00",
//   },
//   {
//     title: "ペペロンチーノ",
//     category: "イタリアン",
//     distance: "200m",
//     isOpen: false,
//     isLiked: true,
//     openingTime: "10:00",
//   },
//   {
//     title: "カンパチ",
//     category: "和食",
//     distance: "300m",
//     isOpen: true,
//     isLiked: true,
//     openingTime: "23:00",
//   },
//   {
//     title: "にく",
//     category: "フレンチ",
//     distance: "400m",
//     isOpen: false,
//     isLiked: false,
//     openingTime: "10:00",
//   },
//   {
//     title: "たい",
//     category: "和食",
//     distance: "500m",
//     isOpen: true,
//     isLiked: false,
//     openingTime: "23:00",
//   },
// ];

// export const getRestaurantData = async () => {
//   // todo:listデータ取得処理を実装する
//   noStore();
//   return sampleRestaurantData;
// };
