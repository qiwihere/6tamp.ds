import React from "react";
import Global from "./components/Global";
import components from "./components";
import AnimatedRoute from "./components/MobileOnly/AnimatedRoute";
import { BrowserRouter, Link } from "react-router-dom";

const App = () => {
  return (
    <>
      <Global />
      <div style={{ padding: "0 5%" }}>
        {components.map((v) => {
          const Component = v.component;
          return (
            <div key={Math.random()}>
              <h1>{v.name}</h1>
              <h2>Default</h2>
              <div>
                {v.children ? (
                  <Component>{v.children}</Component>
                ) : (
                  <Component />
                )}
              </div>
              {v.props.map((property) => {
                const prop = property.name;
                return (
                  <div key={Math.random()} style={{ paddingLeft: "5%" }}>
                    <h2>
                      <i>{prop}:</i>
                    </h2>
                    {property.values.map((value) => (
                      <div key={Math.random()} style={{ paddingLeft: "5%" }}>
                        <h6>{value.toString() || "Without value"}</h6>
                        {v.children ? (
                          <Component {...{ [prop]: value }}>
                            {v.children}
                          </Component>
                        ) : (
                          <Component {...{ [prop]: value }} />
                        )}
                      </div>
                    ))}
                  </div>
                );
              })}
            </div>
          );
        })}

        <div>
          <h1>{"<AnimatedRoute>"}</h1>
          <h2>Default</h2>
          <div style={{ margin: "40px 0" }}>
            <BrowserRouter>
              <Link to={"/"}>Home</Link> <Link to={"/about"}>About</Link>{" "}
              <Link to={"/contact"}>Contact</Link>
              <AnimatedRoute path={"/"}>Home page is here</AnimatedRoute>
              <AnimatedRoute path={"/about"}>About page is here</AnimatedRoute>
              <AnimatedRoute path={"/contact"}>
                Contact page is here
              </AnimatedRoute>
            </BrowserRouter>
          </div>
        </div>
      </div>
    </>
  );
};
export default App;
