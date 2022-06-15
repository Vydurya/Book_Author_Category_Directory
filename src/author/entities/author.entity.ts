import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Author {
    @PrimaryGeneratedColumn()
    aid: number;

    @Column({ name: "Author Name", unique:true })
    aname: string;
}
