import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Category{
    @PrimaryGeneratedColumn()
    cid: number;

    @Column({ name: "Category Name", unique:true })
    cname: string;
}