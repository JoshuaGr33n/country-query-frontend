## Country Query Frontend (Vue.js)

This Vue.js frontend provides a user interface for querying country information based on ISO codes. Users can enter a code, and the frontend retrieves details like name, region, and capital city from a backend API.

### Prerequisites

* Node.js >= 14.x
* npm (or yarn)
* Vue CLI

### Setup Instructions

1. **Clone the Repository:**

```bash
git clone https://github.com/JoshuaGr33n/country-query-frontend.git
cd country-query-frontend
```

2. **Install Dependencies:**

```bash
npm install
# or, if using yarn
yarn install
```

3. **Configure Environment:**

* Duplicate `.env.example` to `.env`.
* Set the `VUE_APP_API_URL` in `.env` to your backend's API endpoint (e.g., `http://localhost:8000`).

4. **Run the Development Server:**

```bash
npm run serve
# or, if using yarn
yarn serve
```

### Testing

Run unit tests:

```bash
npm run test
# or, if using yarn
yarn run test
```

### Additional Information

* Ensure your backend service is running at the configured URL in `.env`.

