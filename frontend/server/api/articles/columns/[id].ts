import { useGraphql } from '~~/utils/useGraphql'

interface IArticleItem {
  id: string
  title: string
}
export default defineEventHandler(async (event): Promise<IArticleItem[]> => {
  const id = decodeURIComponent(event.context.params.id)
  const reqQuery = `query {
    articles(filters:{columId:{column:{eq:"${id}"}}}){
      documentId
      title
    }
  }`
  return (await useGraphql(reqQuery)).articles.data
})
