import fetch from "node-fetch";

// test my api endpoint
it("fetches correctly", () => {
  return fetch("http://localhost:3001/search") // defaults to search for post malone which should never return 0 results
    .then((res) => res.json())
    .then((data) => {
      expect(typeof data).toBe("object"); // check that I get data back
      expect(data.resultCount).not.toBe(0); // check the data resultCount is not 0
    });
});
