import { IComment } from '@/types/comments';
import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import { getCommentsService } from '@/services';

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
  comments: {}
}

export const CommentsProvider = ({ children }: PropsWithChildren) => {
  const [state, setState] = useState<DataCommentType>({ ...initialData } as DataCommentType);
  const setData = (newValue: Partial<DataCommentType>) => {
    setState(pre => ({ ...pre, ...newValue }))
  }

  useEffect(() => {
    const getInit = async () => {
      const comments = await getCommentsService({ page: 1 })

      if (comments) setData({ comments })
    }

    getInit()
  }, [])

  return <CommentsContext.Provider value={{ data: state, setData }}>{children}</CommentsContext.Provider>;
};
