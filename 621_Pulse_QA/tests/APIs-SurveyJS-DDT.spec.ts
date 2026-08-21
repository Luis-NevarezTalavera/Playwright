import { test, expect, APIRequestContext } from '@playwright/test';
import apiTestRequests from "./data/PulseJUA-SurveyJSAPIs-TestCases.json";

// Define Variables
let URL: string = "";
let response: Awaited<ReturnType<APIRequestContext['get']>>;

test.describe("Pulse JUA SurveyJS APIs", () => {
  
  apiTestRequests.forEach(({ startOfURL, middleOfURL, endOfURL, auxDescription, expectedStatusCode, expectedArray, expectedLenght, expected1stObject, expectedLastObject }) => {

    test(`Get ${startOfURL} ${auxDescription.length>0 ? auxDescription : middleOfURL} ${endOfURL} - No Auth - ${expectedStatusCode} - ${expectedLenght}`, async ({ request }) => {
      middleOfURL !== "" && endOfURL !== "" ? URL = `${startOfURL}/${middleOfURL}/${endOfURL}` : middleOfURL === "" && endOfURL === "" ? URL = `${startOfURL}` : URL = `${startOfURL}/${middleOfURL}${endOfURL}`;
      response = await request.get(URL);

      // Check if the response is successful
      expect(response.status() , `Response Expected ${expectedStatusCode}`).toBe(expectedStatusCode);

      // Check if the response contains An Array of Objects
      if (expectedArray) {

        // Check if the response is an array
        expect(await response.json(), "Response Expected to be an Array").toBeInstanceOf(Array);

        // Check if the response contains the expected number of items
        expect(await response.json(), `Response Expected to have {${expectedLenght}} Items`).toHaveLength(expectedLenght);
        
        // Check if the response contains the expected data in the first object
        expect(await response.json(), "Response Expected for First Object").toContainEqual(expect.objectContaining(expected1stObject));

        // Check if the response contains the expected data in the last object
        expect(await response.json(), "Response Expected for Last Object").toContainEqual(expect.objectContaining(expectedLastObject));

      }
      else {
        
        // Check if the response is Not an array
        expect(await response.json(), "Response Expected Not to be an Array").not.toBeInstanceOf(Array);

        // Check if the response contains the expected number of items
        expect(await response.json(), `Response Expected to have {${expectedLenght}} Items`).toHaveLength(expectedLenght);
      
        // Check if the response contains the expected data in the first object
        expect(await response.json(), "Response Expected for First Object").toBe(expected1stObject.response);
        
      }
      
    });
  });
});