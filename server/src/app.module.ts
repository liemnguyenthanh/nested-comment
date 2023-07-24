import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CommentsModule } from './comments/comments.module';

const MONGODB_URL = 'mongodb+srv://nest-chat:nest-chat@cluster0.78vh7.mongodb.net/comments?retryWrites=true&w=majority'
@Module({
  imports: [
    MongooseModule.forRoot(MONGODB_URL),
    CommentsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
