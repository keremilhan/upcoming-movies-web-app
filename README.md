# Upcoming Movies App

## Overview

This Upcoming Movies App provides users with a seamless experience to search for upcoming movies and view their details. Built with modern React tools and libraries, it ensures fast performance, smooth navigation, and an appealing design.

## Third-Party Libraries

### @tanstack/react-query

-   Provides smooth user experience by enabling infinite scroll for data fetching.
-   Minimizes redundant network requests and ensures data consistency.

### axios

-   Used for data fetching because it simplifies making asynchronous requests.

### react-icons

-   Adds nice and cool icons to make the app user-friendly and visually appealing.

### react-router-dom

-   Provides smooth navigation experience to users.
-   Using the useSearchParams hook allows the app to retain the search query. This means that if a user searches for a movie, filters the results, selects a specific movie, and then returns to the homepage using the back button, they will see the filtered movie results with the search string still visible in the search bar. This enhances user experience by maintaining context and continuity in their browsing session.

### tailwind CSS

-   Implements a mobile-first approach for styling.
-   Offers a fast and robust way to style applications.

### prettier

-   Ensures code readability and maintains consistent coding standards within the team.
-   Formats code on save, reducing the need for manual adjustments.

## Getting Started

To get started with the project, follow these steps:

1. **Clone the repository**:

    ```bash
    git clone https://github.com/keremilhan/upcoming-movies-web-app.git
    ```

2. **Install dependencies**:

    ```bash
    cd upcoming-movies-web-app
    npm install
    ```

3. **Configure Environment Variables**:

    Create a `.env` file in the root directory and then add the following variable:

    ```dotenv
    VITE_API_KEY = <your-api-key>
    ```

4. **Run the app**:

    ```bash
    npm run dev
    ```

## Build

```bash
npm run build
```
