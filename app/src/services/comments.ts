import { IComment } from "@/types/comments";
import { requestApi } from "./api";
import { QueryGetCommentsType } from "@/types/services/comments";
import { getParamsUrl } from "@/utils/helpers";
import { Dummy } from "@/dummy";

const convertComments = (data: any[]): { [key: string]: IComment } => {
  const hashMap: { [key: string]: IComment } = {}
  data.map(item => {
    hashMap[item._id] = { ...item, user: Dummy.users['01'] }
  })
  return hashMap
}

export const getCommentsService = async (query: QueryGetCommentsType): Promise<{ [key: string]: IComment }> => {
  const params = getParamsUrl(query)
  const result = await requestApi('comments?' + params)
  const comments = convertComments(result)

  return comments;
}
