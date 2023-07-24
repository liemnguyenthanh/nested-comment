import { Comment } from '@/components/molecules'
import { CommentsContext } from '@/providers/CommentsContext'
import { IComment } from '@/types/comments'
import { useContext } from 'react'

export const Comments = () => {
  const { data } = useContext(CommentsContext)
  return (
    <div className='mt-4'>
      {/* <Comment comment={data.comments.} /> */}
    </div>
  )
}

