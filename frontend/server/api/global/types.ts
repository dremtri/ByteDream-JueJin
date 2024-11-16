import { useGraphql } from '~~/utils/useGraphql'
import type { IType } from '~~/types/IType'

export default defineEventHandler(async (event): Promise<IType> => {
  const query = getQuery(event)
  const page = query?.page || 1
  const reqQuery = `query{
    types(pagination: { page:${page},pageSize: 9 }){
      type
      alias
      tags{
        documentId
        tag
        alias
      }
    }
  }`
  const types = (await useGraphql(reqQuery)).types
  return {
    data: types.data,
    meta: {
      pagination: {
        pageCount: 5,
        total: 8,
      },
    },
  }
})
