import { useGraphql } from '~~/utils/useGraphql'
interface ITagItem {
  tag: string
  alias: string
}
interface IArticleItem {
  id: string
  title: string
  liked: number
  commented: number
}
export default defineEventHandler(async (event): Promise<ITagItem[] | IArticleItem[]> => {
  const query = getQuery(event)
  let reqQuery = `query{
    tags{
      tag
      alias
    }
  }`
  if (JSON.stringify(query) !== '{}' && !!query.tags && !!query.authorId) {
    const tags = JSON.parse(query.tags as string)
    const authorId = query.authorId
    let tagQuery = ''
    for (let i = 0; i < tags.length; i++)
      tagQuery += `{ tagIds: { tag: { eq: "${tags[i].tag}" } } },`
    reqQuery = `query {
      articles(
        filters:{
          or: [${tagQuery}]
          authorId: {documentId:{eq:"${authorId}"}}
        }
        pagination: { pageSize: 10 }
        sort: "liked:desc"
      ){
        title
        liked
        commented
        documentId
      }
    }`
    return (await useGraphql(reqQuery)).articles.data
  }

  return (await useGraphql(reqQuery)).tags.data
})
