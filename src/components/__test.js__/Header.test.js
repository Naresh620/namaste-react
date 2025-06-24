import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "../Header";
import appStore from "../../utils/appStore";

test("should render logo and navigation items in the header", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );


  const logo = screen.getByAltText("logo");
  expect(logo).toBeInTheDocument();


  expect(screen.getByRole("link", { name: "Home" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "About Us" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Contact" })).toBeInTheDocument();
  expect(screen.getByRole("link", { name: "Grocery" })).toBeInTheDocument();

  expect(screen.getByRole("button", { name: "Login" })).toBeInTheDocument();
});
