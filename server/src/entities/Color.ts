import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

@Entity({
    name: 'colors'
})
export class Color {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 100})
    name: string

    /* 
        NOTA: (TypeORM maneja las claves automáticamente, no necesito agregar _id manualmente.)
    */

    @ManyToOne(() => Product, (product) => product.colors)
    product: Product
}