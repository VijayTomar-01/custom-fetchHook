# App Live on Netlify
[Click here to Visit the App](https://custom-fetchhook.netlify.app/)

# Project Structure
```
React apps/
|
└─ hooks/
   |
   ├─ src/
   │  ├─ assets/
   │  │  └─ react.svg
   │  ├─ components/
   │  │  ├─ fetchHook/
   │  │  │  └─ fetchHook.jsx
   │  │  ├─ pages/
   │  │  │  └─ produtsList.jsx
   │  │  ├─ spinner/
   │  │  │  └─ spinner.jsx
   │  │  └─ tile/
   │  │     └─ productTile.jsx
   │  ├─ App.css
   │  ├─ App.jsx
   │  ├─ index.css
   │  └─ main.jsx
   ├─ enhancements.md
   ├─ package.json
   ├─ README.md
```


## Features

### Custom fetchHook
    -> fetch the data from the api
    -> Used useCallback with url dependency to avoid unnecessary callback
    -> Error handling and Retry mechanism
    -> Returns {data, loading, error, fetchData} as props

### Error and Loading State Enhancements
    -> Loading state use react-spinners
    -> Error state has a retry button to re-fetch data in case of client side error

### Product
    -> Products are fetched from dummyjsonAPI
    -> ProductTile For flexibility and reusability
    -> React.memo to avoid unnecessary re-renders when there are unrelated state changes

### Styling
    -> Used tailwind css for responsiveness
    -> animations and grid-layout

### Add to cart
    -> This button logs the product (in future can be used for future error handling when integrating it with cart)


## Enhancements when creating the Project

### useCallback
    -> it prevents unnecessary re-renders on re-creation of fetch data
    -> keeps the useEffect fetchData dependency stable
    
### Retry mechanism
    -> Client can fetch data again with the retry button without requiring page refresh every time

### Design Enhancements
    -> Loading spinner from react-spinners
    -> Retry button
    -> responsive grid layout

### React.memo
    -> a high-order-comp that only allows re-renders when there are changes in the prop and avoid unrelated re-renders.

## Installation
    -> clone the github repository
    -> install the package-lock.json and node_moules with cmd (npm i)
    -> npm run dev to start the app

## future enhancements
    -> Cart context for cart items
    -> product details page for products info (when cilcked navigates to this page)
    -> filtering

## stack used
    -> React
    -> tailwindcss vite
