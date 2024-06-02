import "@styles/globals.css";

import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Promptomia",
  description: "Discover & Share AI Prompts",
};

const Rootlayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        
          <Provider>
            <div className="main">
              <div className="gradient"></div>
            </div>

            <main className="app">
              <Nav></Nav>
              {children}
            </main>
          </Provider>
        
      </body>
    </html>
  );
};
export default Rootlayout;
