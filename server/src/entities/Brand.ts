import { Column, Entity, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Product } from "./Product";

@Entity({
    name: 'brands'
})
export class Brand {
    @PrimaryGeneratedColumn()
    id: number

    @Column({length: 100})
    name: string

    /* 
        NOTA: (TypeORM maneja las claves automáticamente, no necesito agregar _id manualmente.)
    */

    // Un producto solo puede pertencer a una marca
    // Pero las marcas pueden pertenecer a muchos productos
    @OneToMany(() => Product, (product) => product.brand)
    products: Product[] // <-- Aqui guardo los productos relacionados a una marca.
}