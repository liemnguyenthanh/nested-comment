import { IconClose } from '@/assets/icons/IconClose'
import { IconReply } from '@/assets/icons/IconReply'
import { Box, Editor } from '@/components/atoms'
import { Dummy } from '@/dummy'
import { IComment } from '@/types/comments'
import { getTimeAgo } from '@/utils/helpers'
import React, { useState } from 'react'

type Props = {
  comment: IComment
}

export const Comment = ({ comment }: Props) => {
  const { user, content, timestamp } = comment
  const [isOpenReply, setIsOpenReply] = useState(false)

  const handleReply = () => {
    setIsOpenReply(pre => !pre)
  }

  const handleSubmitReply = (value: string) => {
    const createComment: IComment = {
      _id: new Date().getTime().toString(),
      parent_id: comment._id,
      user: Dummy.users['01'],
      content: value,
      timestamp: new Date().getTime(),
      left: 0,
      right: 0,
    }

    console.log(createComment);
  }

  return (
    <Box>
      <div className="flex justify-between items-center p-4 border-b border-gray-100">
        <div className='py-2 text-[20px] font-medium'>Thread</div>
        <span className="cursor-pointer">
          <IconClose />
        </span>
      </div>
      <div className="p-4">
        <div className="flex items-center gap-3">
          <img src={user.avatar} alt={user.username} className="w-[50px] h-[50px] rounded-full" />
          <p className="text-lg font-medium">{user.username}</p>
          <span className="text-xs">{getTimeAgo(timestamp)}</span>
        </div>
        <div className="pt-3">
          {content}
        </div>
        <div className="flex items-center gap-3 my-2">
          <div className="text-lg text-[#8991A0] p-1 hover:bg-slate-200 cursor-pointer rounded-md">2 Likes</div>
          <div className="text-lg text-[#8991A0] p-1 hover:bg-slate-200 cursor-pointer rounded-md flex gap-1 items-center" onClick={handleReply}>
            <IconReply /> Reply
          </div>
        </div>

        {isOpenReply && <Editor onSubmit={handleSubmitReply} />}
      </div>
    </Box>
  )
}
