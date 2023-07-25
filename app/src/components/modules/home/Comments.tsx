import { Comment } from '@/components/molecules'
import { CommentsContext } from '@/providers/CommentsContext'
import { IComment } from '@/types/comments'
import { useContext } from 'react'

export const Comments = () => {
  const { data } = useContext(CommentsContext)
  const { comments } = data
  
  const renderComments = comments && Object.keys(comments).map(item => (
    <Comment key={comments[item]._id} comment={comments[item]} />
  ))

  return (
    <div className='mt-4 flex flex-col gap-5'>
      {renderComments}
    </div>
  )
}

