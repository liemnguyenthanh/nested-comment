import { Injectable } from '@nestjs/common';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Comment } from './comments.schema';
import { Model } from 'mongoose';
import { LIMIT_COMMENT } from 'src/constant';

@Injectable()
export class CommentsService {
  constructor(
    @InjectModel(Comment.name) private commentModel: Model<Comment>,
  ) { }

  async create(commentData: Partial<Comment>): Promise<Comment> {
    const parentComment = commentData.parent_id ? await this.commentModel.findById(commentData.parent_id).exec() : null;
    commentData.timestamp = new Date().getTime();
    const newComment = new this.commentModel(commentData);
    console.log(newComment);

    if (parentComment) {
      // Shifting comments to the right to create space for the new comment
      await this.commentModel.updateMany({ left: { $gte: parentComment.right } }, { $inc: { left: 2 } }).exec();
      await this.commentModel.updateMany({ right: { $gte: parentComment.right } }, { $inc: { right: 2 } }).exec();

      // Inserting the new comment between the parent's left and right boundaries
      newComment.left = parentComment.right;
      newComment.right = parentComment.right + 1;
    } else {
      // Inserting the root comment if there's no parent
      const maxRight = await this.commentModel.findOne().sort('-right').exec();
      const rootRight = maxRight ? maxRight.right + 1 : 1;
      newComment.left = rootRight;
      newComment.right = rootRight + 1;
    }

    return newComment.save();
  }

  async findAll(id: string): Promise<Comment[]> {
    const comment = await this.commentModel.findOne({ _id: id })

    if (comment) {
      const result = await this.commentModel
        .find({ left: { $gt: comment.left }, right: { $lt: comment.right } })
        .limit(LIMIT_COMMENT);

      return result
    }

    return []
  }

  findOne(id: number) {
    return `This action returns a #${id} comment`;
  }

  update(id: number, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  remove(id: number) {
    return `This action removes a #${id} comment`;
  }
}
