import { Author } from "src/author/entities/author.entity";
import { Category } from "src/category/entities/category.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Book{
    @PrimaryGeneratedColumn({ name: "Book id" })
    id: number;

    @Column({ name: "Book Name", unique:true })
    name: string;

    @Column({ name: "Description" })
    description: string;

    @ManyToOne(() => Author, { eager: true })
    @JoinColumn({ name: "author", referencedColumnName: "aid"})
    aid: number;

    @ManyToOne(() => Category, { eager: true })
    @JoinColumn({ name: "category", referencedColumnName: "cid"})
    cid: number;
}