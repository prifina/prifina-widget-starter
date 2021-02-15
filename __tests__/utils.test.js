import { checkUrl } from "../src/App";

it("Test url ", () => {
  expect.assertions(1);
  //"https://s3.amazonaws.com/remote-components.dev.prifina.com/starter/main.bundle.js"
  //const consoleOutput = jest.spyOn(console, "error");
  //console.log("ENV ", process.env);
  const result = checkUrl(process.env.REACT_APP_REMOTE_URL);
  /*
  const result = checkUrl(
    "https://s3.amazonaws.com/remote-components.dev.prifina.com/starter/main.bundle.js"
  );
  */
  //console.log("TEST ", consoleOutput.mock);

  return result.then((res) => expect(res).toBe(true));

  //expect(result).toBe(true);
});
