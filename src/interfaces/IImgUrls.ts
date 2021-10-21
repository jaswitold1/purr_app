export default interface IImgUrls {
  body:[{
    breeds: []
    categories: [
      {
        id: number,
        name: string
      }
    ],
    height: number,
    id: string,
    url: string,
    width: number
  }]
  categoryName:string

    
}