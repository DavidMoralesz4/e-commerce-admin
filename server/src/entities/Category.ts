import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

@Entity({
    name: 'categories'
})
export class Category {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 100})
    name: string

    /* 
        NOTA: (TypeORM maneja las claves automáticamente, no necesito agregar _id manualmente.)
    */


    // Un producto solo pertenece a una categoria
    // Pero una categoria puede pertenecer a muchos productos
    @OneToMany(() => Product, (product) => product.category)
    product: Product[] // Aqui guardo los productos con una categoria
}