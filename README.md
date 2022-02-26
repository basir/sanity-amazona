# Sanity Amazona

## Lessons

1. Introduction
   1. What you will learn
   2. What you will build
   3. What Packages you will use
2. Install Tools
   1. VS Code
   2. Chrome
   3. Git
   4. Node.js
3. Create Next App
   1. npx create-next-app
   2. add @mui library
4. Publish to github
   1. create githb account
   2. push to github from vs code
5. Create Website Layout
   1. Add header
   2. Add main
   3. Add footer
6. Connect to Sanity.io
   1. install sanity
   2. initialize sanity
   3. create product model
   4. insert sample data to product model
7. List Products
   1. add localhost:3000 to the CORS origins in sanity
   2. fetch products from sanity
   3. render them in the screen
8. Create Product Details Screen
   1. add [slug].js to product folder
   2. create component
   3. get slug from the url
   4. fetch product from sanity client
   5. render product image, info
   6. show add to cart button
9. Create React Context
   1. define Context, Store and reducer
   2. set darkMode flag
   3. use it on layout
10. Implement Add to cart
    1. define cart in context
    2. dispatch add to cart action
    3. set click event handler for button
11. Create Cart Screen
    1. get cart items from context
    2. render in the screen
    3. show cart items in the header menu
    4. implement add to cart in home page
12. Display Cart Badge In Header Menu
    1. add cart link to header
    2. show cart items badge in header
    3. implement add to cart in home page
13. Create Login and Register Screen
    1. create login form
    2. create register for
14. Implement User Register API
    1. create user model
    2. create user create route api
    3. use it in the register screen
15. Implement User Login API
    1. create login api
    2. use login api in login screen
    3. implement logout
16. Create Shipping Screen
    1. create shipping component
    2. get address fields
    3. implement submit handler
    4. handle redirect
17. Create Payment Screen
    1. create payment component
    2. get payment method
    3. implement submit handler
18. Create Place Order Screen
    1. create place order component
    2. preview order
    3. create order model in sanity
    4. create order on place order click handler
19. Create Order Screen
    1. create order component
    2. display order information
20. Pay Order By PayPal
    1. generate paypal client id
    2. create api to return client id
    3. install react-paypal-js
    4. use PayPalScriptProvider in index.js
    5. use usePayPalScriptReducer in Order Screen
    6. implement loadPaypalScript function
    7. render paypal button
    8. implement onApprove payment function
    9. create pay order api in backend
21. Display Order History
    1. create order history component
    2. load orders of current user
    3. render orders in the screen
22. Update User Profile
    1. create profile screen
    2. create input forms for name, email
    3. update user info
23. Create Search Screen
    1. create search screen
    2. implement search filters
    3. list products
24. Publish on Vercel
    1. create vercel account
    2. connect it to gitub
    3. add vercel domain to allow origin in sanity
    4. publish result
