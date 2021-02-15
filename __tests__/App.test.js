import React from "react";
import { render, screen, waitFor, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import "regenerator-runtime/runtime";
import Enzyme from "enzyme";
import EnzymeAdapter from "enzyme-adapter-react-16";

import App from "../src/App";

afterEach(cleanup);

Enzyme.configure({
  adapter: new EnzymeAdapter(),
});
test("App renders correctly", async () => {
  const { container, getByText, debug, rerender } = render(<App />);
  //expect(getByText("Hello")).toBeInTheDocument();
  //console.log("CONTAINER ", container.firstChild);
  //rerender(<App />);
  //debug();
  //expect(await screen.findByText("Testing...")).toBeInTheDocument();

  //expect(await screen.findByText("Loading", {}, { timeout: 3000 })).toBeInTheDocument();

  //screen.debug();

  //await waitFor(() => screen.getByText("Testing..."));
  /*
  expect(
    await screen.getByRole("remote", {}, { timeout: 5000 })
  ).toBeInTheDocument();
  screen.debug();
*/
  expect(await screen.findByText("Testing...")).toBeInTheDocument();

  await waitFor(() => screen.getByRole("remote", {}, { timeout: 15000 }));

  expect(await screen.getByRole("remote")).toBeInTheDocument();

  /*
  debug 
  expect(getByText('Hello, world!')).toBeInTheDocument()
  expect(container.firstChild).toMatchInlineSnapshot(`
    <h1>Hello, World!</h1>
  `)
  */
});
