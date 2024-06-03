# Server-Side Rendering with React and Webpack

This project demonstrates the steps taken to implement server-side rendering (SSR) using React and Webpack. The following steps were taken to achieve SSR:

1. **Configured Webpack for Server-side Bundling**:
   - Set up Webpack to bundle the server-side code, enabling it to handle server-side rendering of React components.

2. **Sent HTML from the Server**:
   - The server generates the HTML content using ReactDOMServer's `renderToString` method and sends this pre-rendered HTML to the client.

3. **Hydrated with JavaScript**:
   - On the client side, the React application is hydrated using ReactDOM's `hydrate` method, which attaches event listeners to the pre-rendered HTML without overwriting it.

4. **Applied Styles**:
   - Styles were included and applied both on the server and the client to ensure a consistent look and feel.

## To initialize

1- Clone the respoitory:   git clone https://github.com/SofiaInchausti/SSR-Platzi.git

2- cd SSR-Platzi

3- npm install

4- npm start
