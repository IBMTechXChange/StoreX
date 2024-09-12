# StoreX

StoreX is an advanced storage management application that simplifies data organization and retrieval with the power of AI. Part of the SuiteX suite, StoreX provides seamless integration with other SuiteX tools, offering a unified and efficient workspace.

## Tech Stack

StoreX is built using a modern stack of technologies that ensures a high-quality, scalable, and maintainable application. Here's a breakdown of the tech stack used in the project:

### Frontend

- **React**: A powerful JavaScript library for building user interfaces. React allows for the creation of reusable UI components and manages the state of the application efficiently, providing a responsive and dynamic user experience.
- **styled-components**: A library for styling React components using tagged template literals. It enables the creation of component-scoped styles with a syntax that allows for dynamic styling based on props and themes.

### Backend

- **Firebase**: A comprehensive platform developed by Google for building and managing applications. StoreX utilizes Firebase for:
  - **Authentication**: Provides secure user authentication and management, supporting various sign-in methods including email/password and third-party providers like Google.
  - **Firestore**: A flexible, scalable database for storing and synchronizing data in real-time. Firestore enables efficient data retrieval and real-time updates, essential for collaborative features and dynamic content in StoreX.

### Other Libraries and Tools

- **react-router-dom**: A library for handling routing in React applications. It allows the creation of single-page applications with navigation between different views or pages without full page reloads, enhancing the user experience.
- **react-toastify**: A library for displaying notifications and toast messages in React. It provides a simple way to show user feedback and alerts with customizable styles and positions, improving the interactivity and usability of the application.

## Additional Notes

- **State Management**: StoreX employs React's built-in state management along with context APIs and hooks for managing application state and side effects effectively.
- **Responsive Design**: The application is designed to be responsive, ensuring a seamless experience across various devices and screen sizes.
- **Security**: Leveraging Firebase’s robust security features to protect user data and authentication credentials.

This stack provides a robust foundation for building a modern web application with a focus on performance, scalability, and a great user experience.

## Installation

Follow these steps to set up and run the StoreX application locally:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/IBMTechXChange/StoreX.git


   ```
2. **Change into the Project Directory**

   ```bash
   cd storex
   ```
3. **Install Dependencies**

   ```bash
   npm install
   ```

## Usage

To start the development server and open the application in your browser, follow these steps:

1. **Start the Development Server**

   ```bash
   npm run dev
   ```
2. **Open the App in Your Browser**

   Visit [http://localhost:5173](http://localhost:5173) to view the app.


## Configuration

StoreX uses environment variables to configure Firebase and other settings. Create a `.env` file in the root of your project and add the following configuration:

```shell
VITE_APIKEY=YOUR_FIREBASE_API_KEY
VITE_AUTHDOMAIN=YOUR_FIREBASE_AUTH_DOMAIN
VITE_PROJECT_ID=YOUR_FIREBASE_PROJECT_ID
VITE_STORAGE_BUCKET=YOUR_FIREBASE_STORAGE_BUCKET
VITE_MESSAGING_SENDER_ID=YOUR_FIREBASE_MESSAGING_SENDER_ID
VITE_APP_ID=YOUR_FIREBASE_APP_ID
```

Replace the placeholder values with your actual Firebase credentials. Ensure that your `.env` file is included in your `.gitignore` to keep sensitive information secure.

## Features

- **AI-Driven File Organization**: Automatically categorize and tag files.
- **Unified Access**: Integrates with SuiteX tools for seamless file management.
- **Smart Search**: Powerful search capabilities to quickly find files.
- **Collaborative Tools**: Share and collaborate on files in real-time.
- **Secure Storage**: Encrypted storage to protect your data.

## Contributing

If you'd like to contribute to StoreX, please fork the repository and submit a pull request with your changes. Make sure to follow the project's coding guidelines and ensure that your changes are well-tested.

## Contact

For any inquiries or support, please contact us at [https://github.com/IBMTechXChange](https://github.com/IBMTechXChange)

---

Thank you for using StoreX! We hope it enhances your file management experience.
