import { Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm"
import { Color } from "./Color"

@Entity({
    name: "products"
})
export class Product {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 100,
        nullable: true
    })
    name: string

    @Column({ length: 255, nullable: true })
    image: string

    @Column({ length: 255, nullable: true })
    description: string

    @Column("integer", {nullable: true})
    stock: number

    @Column("integer", {nullable: true})
    price: number
    
    @OneToMany(() => Color, (color) => color.product)
    colors: Color[] // Son varios colores - por eso utilizo un array
}


// category_id:
// brand_id: