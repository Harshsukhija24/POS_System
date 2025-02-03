# POS Interface for Selling Services

##  Overview
This project is a **Point of Sale (POS) interface** for selling services such as fitness classes, therapy sessions, and workshops. It allows users to select services, manage a cart, add customer details, simulate payments, and generate receipts. Additionally, an admin panel is implemented for analytics.

##  Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **State Management:** Redux
- **Authentication:** Admin login with email and password
- **Internationalization:** Multi-language support (i18n)
- **Backend:** JSONBin (for fetching data)
- **Routing:** React Router DOM

##  Features
###  Core Features
- **Service Selection:** Users can browse and select from a list of available services.
- **Cart Management:** Add, remove, and edit services in the cart.
- **Customer Management:** Users can optionally provide their details (name, email, phone) during checkout.
- **Simulated Payments:** Checkout flow with mock payment functionality.
- **Receipt Generation:** Displays a summary of the transaction after checkout.

###  Additional Enhancements
- **Admin Panel:** Route for admin authentication to view analytics (total revenue, number of services sold, etc.).
- **Filtering & Search:** Users can filter and search for services efficiently.
- **Internationalization:** Supports multiple languages for a better user experience.
- **Fully Responsive:** Works seamlessly across web and mobile devices.

##  Project Structure
```
 pos-interface
├──  public
├──  src
│   ├──  components  # Reusable UI components
│   ├──  pages       # Page components (Home, Cart, Checkout, Admin, etc.)
│   ├──  redux       # Redux store, slices, and actions
│   ├──  i18n        # Multi-language configuration
│   ├── App.js        # Main application entry
│   ├── index.js      # React DOM rendering
├── .gitignore
├── package.json
├── README.md
```

##  Setup & Installation
1. **Clone the Repository**
   ```sh
   git clone https://github.com/Harshsukhija24/POS_System.git
   cd pos-interface
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Run the Development Server**
   ```sh
   npm start
   ```
   The application will be available at `http://localhost:3000`.

## Application Routes

**Public Routes**
- **`/` (Home Page)**: Displays available services with search and filter options.
- **`/cart` (Cart Page)**: Shows added services and allows users to modify their cart.
- **`/CheckOutPage` (Checkout Page)**: Allows users to enter details and proceed with payment.
- **`/ReceiptPage` (Receipt Page)**: Displays a receipt with transaction details post-checkout.
- **`/login` (Login Page)**: Admin login page for authentication.

### Protected Admin Route
- **`/adminPage` (Admin Dashboard)**: Displays analytics and insights. Requires authentication.

## Admin Credentials
To access the admin panel, use the following credentials:
- **Email**: `admin@gmail.com`
- **Password**: `admin123`

4. **Admin Authentication**
   - Navigate to `/admin` route.
   - Login using the provided email and password to access analytics.

##  Internationalization Support
- Implemented using `react-i18next`.
- Supports multiple languages (configurable in the settings).

##  Configuration
- JSONBin is used as a backend to fetch data.

##  Assumptions 
- Payments are **mocked** (no real transactions occur).
- Admin authentication is **basic** (not using secure authentication services).
- Data is **fetched from JSONBin**, which may have rate limits.



###  Thank you for checking out this project! 