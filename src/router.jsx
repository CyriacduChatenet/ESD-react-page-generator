import { BrowserRouter, Route, Routes } from "react-router-dom";
import data from "./data.json";
import { HomePage } from "./home";
import { Page } from "./page";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<HomePage data={data} />} />
        <Route>
          {data.map((project, index) => (
            <Route
              key={index}
              path={`/${project.link}`}
              element={
                <Page
                  name={project.name}
                  logo={project.logo}
                  primary_color={project.primary_color}
                  secondary_color={project.secondary_color}
                  description={project.descritpion}
                  stand={project.stand}
                  banner={project.banner}
                />
              }
            />
          ))}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
