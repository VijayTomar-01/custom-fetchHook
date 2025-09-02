import React from "react";


const ProductTile = React.memo(function ProductTile({singleProductTile, addToCart}){

    return(
        <>
            <div className="border mx-auto border-cyan-400 relative group ">
                <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                <img 
                src={singleProductTile.thumbnail} 
                alt={singleProductTile.title}
                className="object-cover w-full h-full transition-all duration-300 group-hover:scale-125 " />
                </div>
                <div className="flex flex-start font-bold text-gray-900">
                    <p className="text-sm w-25 whitespace-nowrap overflow-hidden text-ellipsis sm:text-xs">{singleProductTile.title}</p>
                </div>
                <div className="text-right p-1">
                    <p className="text-sm sm:text-xs font-bold text-gray-900">${singleProductTile.price}</p>
                </div>
                <div className="flex flex-wrap justify-center gap-2">
                    <button 
                    className="px-4 font-bold max-w-full bg-gray-900 rounded-none text-white mt-2 text-lg mb-1">View Details</button>
                    <button 
                    onClick={()=> addToCart(singleProductTile)}
                    className="px-4 font-bold max-w-full bg-gray-900 rounded-none text-white mt-2 text-lg mb-1">Add to cart</button>
                </div>
            </div>   
        </>
    )
})

export default ProductTile;