import { auth } from "@/auth";
import ProductCard from "@/components/product-card-component/ProductCard";
import SearchComponent from "@/components/SearchComponent";
import ShowForm from "@/components/show-create-form-product/ShowForm";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) {
    return <div>No autorizado</div>;
  }

  return (
    <div className="w-full px-4 md:px-2">
      <h1 className="text-2xl font-semibold mb-4 text-black hidden md:flex">Tu Inventario</h1>
      <p className="text-black mb-5 hidden md:flex">Todos los productos</p>

      <h1 className="text-2xl font-semibold mb-4 text-black text-center md:hidden">Tu Inventario</h1>
      <p className="text-black mb-5 text-center md:hidden">Todos los productos</p>


      <div className="flex flex-col lg:flex-row gap-6">
        <div className="flex-1">
          {/* Filtros y botón */}
          <div className="flex flex-col md:flex-row gap-4">
            <SearchComponent />
            <ShowForm />
          </div>
          
          {/* TODO: Ajustar el contenedor de productos con scroll (cards) */}
          {/* Productos */}
          <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 mt-10 gap-4 ">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>

        {/* Sidebar de categorías */}
        {/* <div className="w-full lg:w-64">
          <SideCategory />
        </div> */}
      </div>
    </div>
  );
}
