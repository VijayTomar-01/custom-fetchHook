## Enhancement in useFetch
    => first created a fetchData async function then enhanced it to useCallback with arrow async with url as dependency 
    => enhanced useEffect for render fetchData with fetchData dependency 
    => returned data, loading and error

## Page to render the fetched Url
    => managed the loading and error first
    => Enhancement for loading - used react-spinners 
    => Enhancement for Error - Retry button which fetchData again on click parsed as prop in useFetch hook
    => Created a productTile to render the products on webPage, effective for reusability with changes
    => styled with tailwind css 
    => console.log() for Add to Cart button 

## Used dummyJSON api for fetching the url
