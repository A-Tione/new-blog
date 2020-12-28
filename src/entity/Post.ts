import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

// 实体
@Entity('posts')
export class Post {
  @PrimaryGeneratedColumn('increment')
  id: number;
  @Column('varchar')
  title: string;
  @Column('text')
  content: string;
  
  constructor(attributes: Partial<Post>) { // Partial 可以传一个也可以传两个
    Object.assign(this, attributes);
    
  }
  
}
