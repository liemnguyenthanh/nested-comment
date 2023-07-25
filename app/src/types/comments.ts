import { IUser } from "./users";

export interface IAttachment {
  _id: string
  thumbnail: string
}

export interface IComment {
  _id: string
  parent_id?: string
  children?: string[]
  user: IUser
  attachments?: IAttachment[]
  content: string
  timestamp: number
  left: number
  right: number
}