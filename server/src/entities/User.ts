import { Entity, PrimaryGeneratedColumn, Column } from "typeorm"

@Entity({
    name: 'users'
})
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    firstName: string

    @Column()
    lastName: string

    @Column()
    document: string
    
    @Column()
    email: string

    @Column()
    password: string
}