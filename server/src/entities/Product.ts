import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { Color } from "./Color"
import { Brand } from "./Brand"
import { Category } from "./Category"

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

    @ManyToOne(() => Brand, (brand) => brand.products)
    brand: Brand

    @ManyToOne(() => Category, (catgegory) => catgegory.product)
    category: Category

}


// category_id:
// brand_id: