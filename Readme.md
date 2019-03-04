This is an Angular CLI Single Page Application. For the back-end I used Node.js, database: MongoDB.
The application name is '#Restaurant' and serves a restaurant. Through the application users can order food.
User roles:
  1. Admin
    -Admins can:
      *change the role of the users (allUsers screen) - after the update, the updated user needs to logout and login again
       in order for the changes to become visible.
      *search for a particular user (allUsers screen)
      *view allOrders screen
      *view each order's details
  2. Moderators
    -Moderators can:
      *Add/Edit/Delete meals
      *Edit form becomes available when the Edit button is clicked in mealDetails. This button is available only
       for moderators.
  3. Deliverers
    -Deliverers can:
      *View allOrders screen
      *Take and deliver orders (each deliverer can only deliver an order that they have taken)
      *View orderDetails screen
  4. Staff
    -This role represents the staff, working at the restaurant
    -Can change status of orders (only if the order is for pickup)
  5. User
    -Represents regular registered users.
    -Users can:
      *Add meals to their cart, update the quantity of each meal from the myCart screen, make orders
      *Each users can view their own orders (in detail as well)

Unregistered users can browse through the application, but cannot add meals to their cart or make any orders.
In the menu screen users can filter the products by category, sort the products by their price, or search with
keywords. ContactUs, AboutUs, Home and Menu screens can be accessed from all users  (registered or not).

Specifics:
  1.AllOrdersScreen updates every 3 seconds, to keep the data up-to-date, in order to prevent conflicts upon taking an
    order.
  2. OrderDetails screen is specific for each order and is available to the order-issuer, deliverers and admins.
  3. Every registered user has their own myCart screen, which can be accessed from themselves ONLY - no user can access
     someone else's myCart screen.

IMPORTANT:
  1. THIS IS NOT A REAL SERVICE - THE RESTAURANT DOES NOT EXIST, THE OFFICES AND PRICES ARE DUMMY (NOT REAL).
  2. I DO NOT OWN ANY OF THE PICTURES USED IN THIS PROJECT.
  3. THE PURPOSE OF THIS APPLICATION IS NOT FOR COMMERCIAL USES - THE APPLICATION WAS CREATED FOR EXERCISE.