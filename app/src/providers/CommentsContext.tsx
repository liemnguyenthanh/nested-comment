import { IComment } from '@/types/comments';
import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { Dummy } from '@/dummy'
type DataCommentType = {
  comments?: { [key: string]: IComment }
}

type CommentsContextType = {
  data: DataCommentType;
  setData: (value: Partial<DataCommentType>) => void
};

export const CommentsContext = createContext<CommentsContextType>({
  data: {},
  setData: () => { }
});

const initialData = {
  comments: { [Dummy.comments['123123']._id]: Dummy.comments[123123] }
}

export const CommentsProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<DataCommentType>({ ...initialData } as DataCommentType);
  const setData = (newValue: Partial<DataCommentType>) => {
    setState(pre => ({ ...pre, ...newValue }))
  }

  return <CommentsContext.Provider value={{ data: state, setData }}>{children}</CommentsContext.Provider>;
};
