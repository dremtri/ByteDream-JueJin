import { useGraphql } from '~~/composables/graphql'
interface IAuthor {
  name: string
  motto: string
  avatar: string
  rank: Number
  liked: Number
  viewed: Number
}

interface ITagItem {
  tag: string
}

interface IType {
  type: string
}

interface IColumn {
  column: string
}
interface IArticle {
  id: string
  title: string
  viewed: number
  liked: number
  shared: number
  commented: number
  content: string
  cover: string
  createdAt: string
  authorId: IAuthor
  tagId: { data: ITagItem[] }
  typeId: IType
  columId: IColumn
}
export default defineEventHandler(async (event): Promise<IArticle> => {
  const id = event.context.params.id
  const reqQuery = `query{
        articles(id:${id}){
        data{
          id
          attributes{
            title
            viewed
            liked
            shared
            commented
            content
            cover
            createdAt
            authorId{
              data{
                attributes{
                  name
                  motto
                  avatar
                  rank
                  liked
                  viewed
                }
              }
            }
            tagId{
              data{
                attributes{
                  tag
                }
              }
            }
            typeId{
              data{
                attributes{
                  type
                }
              }
            }
            columId{
              data{
                attributes{
                  column
                }
              }
            }
          }
        }
      }
}`
  return await useGraphql(reqQuery)
})