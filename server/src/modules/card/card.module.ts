import { Module } from '@nestjs/common';
import { CardService } from './card.service';
import { CardController } from './card.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Card } from './card.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Card]),],
  providers: [CardService],
  controllers: [CardController]
})
export class CardModule {}
