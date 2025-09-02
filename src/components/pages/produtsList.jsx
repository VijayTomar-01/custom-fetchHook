import { useCallback } from "react";
import useFetch from "../fetchHook/fetchHook";
import Spinner from "../spinner/spinner";
import ProductTile from "../tile/productTile";



function ProductList(){

    const {data, loading, error, fetchData} = useFetch('https://dummyjson.com/products?limit=100')

    const handleAddToCart = useCallback((product)=>{
        console.log('Added to cart', product);
    }, [])
 
    if(loading) return <Spinner />
    if(error) return(
        <>
        <div className="text-center text-red-400 mt-4">
            <p>Error: {error.message}</p>
            <button 
            className="mt-2 px-4 py-2 bg-blue-500 text-white rounded"
            onClick={fetchData}>
                Retry
            </button>
        </div>
        </>
    ) 

    return(
        <>
            <div className="max-w-full bg-white">
                <div className="max-w-7xl mx-auto bg-amber-50 shadow-sm shadow-blue-200">
                    <p className="text-3xl font-bold px-3 py-6">Products</p>
                </div>
                <div className="grid lg:grid-cols-5 md:grid-cols-2 lg:gap-16 sm:gap-4 sm:mt-4 md:gap-10">
                    {
                        data?.products && data?.products.length>0
                        ? data?.products.map(singleProductTile=> <ProductTile 
                        key={singleProductTile.id}
                        singleProductTile={singleProductTile}
                        addToCart={handleAddToCart}
                        />)
                        : <h4 className="font-bold text-2xl text-red-300 text-center w-7xl mt-6 hover:scale-125 transition-all duration-300">No Products Available</h4>
                    }
                </div>

            </div>
        </>

    )
}
export default ProductList;