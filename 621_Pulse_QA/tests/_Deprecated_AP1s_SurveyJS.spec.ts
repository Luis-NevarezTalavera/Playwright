import { test, expect } from '@playwright/test';

test('Get Specialties - No Auth - 200 OK', async ({ request }) => {
  const Specialties = await request.get(`Specialties/`);

  // Check if the response is successful
  expect(Specialties.status() , "Response Expected 200 OK").toBe(200);

  // Check if the response contains An Array of Objects
  expect(await Specialties.json(), "Response Expected to be an Array").toBeInstanceOf(Array);

  // Check if the response contains the expected number of items
  expect(await Specialties.json(), "Response Expected to have 216 Items").toHaveLength(217);

  // Check if the response contains the expected data in the first object
  expect(await Specialties.json(), "Response Expected for First Object").toContainEqual(expect.objectContaining({
    "id": "616ffb04-515a-4159-87e0-c8d62bde09ce",
    "name": "Active U.S. Military",
    "code": "80172A"
  }));

  // Check if the response contains the expected data in the last object
  expect(await Specialties.json(), "Response Expected for Last Object").toContainEqual(expect.objectContaining({
    "id": "017111ac-b5a2-4cee-b969-719116ac0039",
    "name": "X-Ray Technician",
    "code": "80713"
  }));

});

test('Get appSpecialties - Facility - No Auth - 200 OK', async ({ request }) => {
  const FacilitySpecialties = await request.get(`appSpecialties/Facility`);

  // Check if the response is successful
  expect(FacilitySpecialties.status() , "Response Expected 200 OK").toBe(200);
  // Check if the response contains An Array of Objects
  expect(await FacilitySpecialties.json(), "Response Expected to be an Array").toBeInstanceOf(Array);
  // Check if the response contains the expected number of items
  expect(await FacilitySpecialties.json(), "Response Expected to have 216 Items").toHaveLength(217);
  // Check if the response contains the expected data in the first object
  expect(await FacilitySpecialties.json(), "Response Expected for First Object").toContainEqual(expect.objectContaining({
    "id": "616ffb04-515a-4159-87e0-c8d62bde09ce",
    "name": "Active U.S. Military",
    "code": "80172A"
  }));

  // Check if the response contains the expected data in the last object
  expect(await FacilitySpecialties.json(), "Response Expected for Last Object").toContainEqual(expect.objectContaining({
    "id": "11ff9650-82ea-4fa5-9ed3-e6f8476ba219",
    "name": "X-Ray Therapy Technician/Radiological Physicist",
    "code": "80714B"
  }));

});

test('Get appSpecialties - HealthcarePro - No Auth - 200 OK', async ({ request }) => {
  const FacilitySpecialties = await request.get(`appSpecialties/HealthcarePro`);

  // Check if the response is successful
  expect(FacilitySpecialties.status() , "Response Expected 200 OK").toBe(200);
  // Check if the response contains An Array of Objects
  expect(await FacilitySpecialties.json(), "Response Expected to be an Array").toBeInstanceOf(Array);
  // Check if the response contains the expected number of items
  expect(await FacilitySpecialties.json(), "Response Expected to have 216 Items").toHaveLength(217);
  // Check if the response contains the expected data in the first object
  expect(await FacilitySpecialties.json(), "Response Expected for First Object").toContainEqual(expect.objectContaining({
    "id": "616ffb04-515a-4159-87e0-c8d62bde09ce",
    "name": "Active U.S. Military",
    "code": "80172A"
  }));

  // Check if the response contains the expected data in the last object
  expect(await FacilitySpecialties.json(), "Response Expected for Last Object").toContainEqual(expect.objectContaining({
    "id": "11ff9650-82ea-4fa5-9ed3-e6f8476ba219",
    "name": "X-Ray Therapy Technician/Radiological Physicist",
    "code": "80714B"
  }));

});

test('Get appSpecialties - Physician - No Auth - 200 OK', async ({ request }) => {
  const FacilitySpecialties = await request.get(`appSpecialties/Physician`);

  // Check if the response is successful
  expect(FacilitySpecialties.status() , "Response Expected 200 OK").toBe(200);
  // Check if the response contains An Array of Objects
  expect(await FacilitySpecialties.json(), "Response Expected to be an Array").toBeInstanceOf(Array);
  // Check if the response contains the expected number of items
  expect(await FacilitySpecialties.json(), "Response Expected to have 216 Items").toHaveLength(217);
  // Check if the response contains the expected data in the first object
  expect(await FacilitySpecialties.json(), "Response Expected for First Object").toContainEqual(expect.objectContaining({
    "id": "616ffb04-515a-4159-87e0-c8d62bde09ce",
    "name": "Active U.S. Military",
    "code": "80172A"
  }));

  // Check if the response contains the expected data in the last object
  expect(await FacilitySpecialties.json(), "Response Expected for Last Object").toContainEqual(expect.objectContaining({
    "id": "11ff9650-82ea-4fa5-9ed3-e6f8476ba219",
    "name": "X-Ray Therapy Technician/Radiological Physicist",
    "code": "80714B"
  }));

});

test('Get uiSectionSpecialties - Physician Surgeon - PhysicianInTraining - No Auth - 200 OK', async ({ request }) => {
  const uiSectSpecsPSPhysInTraining = await request.get(`uiSectionSpecialties/0c355626-9dfc-4942-a0d0-6ac8673887c8/PhysicianInTraining/`);

  // Check if the response is successful
  expect(uiSectSpecsPSPhysInTraining.status() , "Response Expected 200 OK").toBe(200);

  // Check if the response contains An Array of Objects
  expect(await uiSectSpecsPSPhysInTraining.json(), "Response Expected to be an Array").toBeInstanceOf(Array);

  // Check if the response contains the expected number of items
  expect(await uiSectSpecsPSPhysInTraining.json(), "Response Expected to have 3 Items").toHaveLength(3);

  // Check if the response contains the expected data in the first object
  expect(await uiSectSpecsPSPhysInTraining.json(), "Response Expected for First Object").toContainEqual(expect.objectContaining({
    "id": "35687134-2386-478f-b142-1e228f9e8733",
    "name": "Physician In Training - Fellow",
    "code": "80100C"
  }));

  // Check if the response contains the expected data in the last object
  expect(await uiSectSpecsPSPhysInTraining.json(), "Response Expected for Last Object").toContainEqual(expect.objectContaining({
    "id": "5d514bed-f305-4d8b-9975-8e3e6f5f5919",
    "name": "Physician In Training - Resident",
    "code": "80100B"
  }));

});

test('Get uiSectionSpecialties - Physician Surgeon - NewSpecialties - No Auth - 200 OK', async ({ request }) => {
  const uiSectSpecsPSNewSpecialties = await request.get(`uiSectionSpecialties/0c355626-9dfc-4942-a0d0-6ac8673887c8/NewSpecialties/`);

  // Check if the response is successful
  expect(uiSectSpecsPSNewSpecialties.status() , "Response Expected 200 OK").toBe(200);

  // Check if the response contains An Array of Objects
  expect(await uiSectSpecsPSNewSpecialties.json(), "Response Expected to be an Array").toBeInstanceOf(Array);

  // Check if the response contains the expected number of items
  expect(await uiSectSpecsPSNewSpecialties.json(), "Response Expected to have 13 Items").toHaveLength(13);

  // Check if the response contains the expected data in the first object
  expect(await uiSectSpecsPSNewSpecialties.json(), "Response Expected for First Object").toContainEqual(expect.objectContaining({
    "id": "3eb6b0df-c988-4bf9-86c4-4897798dfa31",
    "name": "Diagnostic X-Ray Tech",
    "code": "80148C"
  }));

  // Check if the response contains the expected data in the last object
  expect(await uiSectSpecsPSNewSpecialties.json(), "Response Expected for Last Object").toContainEqual(expect.objectContaining({
    "id": "4fd05efd-d6a2-4b86-b45a-ba4ab55bce72",
    "name": "Radioactive Isotopes",
    "code": "80165B"
  }));

});

test('Get uiSectionSpecialties - Physician Surgeon - Other - No Auth - 200 OK', async ({ request }) => {
  const uiSectSpecsPSNewOther = await request.get(`uiSectionSpecialties/0c355626-9dfc-4942-a0d0-6ac8673887c8/Other/`);

  // Check if the response is successful
  expect(uiSectSpecsPSNewOther.status() , "Response Expected 200 OK").toBe(200);

  // Check if the response contains An Array of Objects
  expect(await uiSectSpecsPSNewOther.json(), "Response Expected to be an Array").toBeInstanceOf(Array);

  // Check if the response contains the expected number of items
  expect(await uiSectSpecsPSNewOther.json(), "Response Expected to have 101 Items").toHaveLength(101);

  // Check if the response contains the expected data in the first object
  expect(await uiSectSpecsPSNewOther.json(), "Response Expected for First Object").toContainEqual(expect.objectContaining({
    "id": "616ffb04-515a-4159-87e0-c8d62bde09ce",
    "name": "Active U.S. Military",
    "code": "80172A"
  }));

  // Check if the response contains the expected data in the last object
  expect(await uiSectSpecsPSNewOther.json(), "Response Expected for Last Object").toContainEqual(expect.objectContaining({
    "id": "9e71b96f-2e93-492c-8228-d16b984b2e4a",
    "name": "Vascular Surgery",
    "code": "80146"
  }));

});

test('Get uiSectionSpecialties - Health Care Professional - Other - No Auth - 404 No Results', async ({ request }) => {
  const uiSectSpecsHCProNewOther = await request.get(`uiSectionSpecialties/1f216994-30d8-4207-aac4-3a6f8b073dac/Other/`);

  // Check if the response is successful
  expect(uiSectSpecsHCProNewOther.status(), "Response Expected 404 No Results").toBe(404);

  // Check if the response text contains the expected message
  expect(await uiSectSpecsHCProNewOther.text(), "Response Expected to contain 'No Results'").toContain("No Results");

});

test('Get uiSectionSpecialties - Healthcare Facility - Hospital - No Auth - 200 OK', async ({ request }) => {
  const uiSectSpecsHospital = await request.get(`uiSectionSpecialties/e530756a-ced6-4dd0-979b-ab8e6db5c921/Hospital/`);

  // Check if the response is successful
  expect(uiSectSpecsHospital.status(), "Response Expected 200 OK").toBe(200);

  // Check if the response contains An Array of Objects
  expect(await uiSectSpecsHospital.json(), "Response Expected to be an Array").toBeInstanceOf(Array);

  // Check if the response contains the expected number of items
  expect(await uiSectSpecsHospital.json(), "Response Expected to have 11 Items").toHaveLength(11);

  // Check if the response contains the expected data in the first object
  expect(await uiSectSpecsHospital.json(), "Response Expected for First Object").toContainEqual(expect.objectContaining({
    "id": "b6fca702-92fa-4174-944b-ae8d8365c05a",
    "name": "Acute Care Beds",
    "code": "80612"
  }));

  // Check if the response contains the expected data in the last object
  expect(await uiSectSpecsHospital.json(), "Response Expected for Last Object").toContainEqual(expect.objectContaining({
    "id": "f714351f-3b04-49f1-8da9-b98bad149efa",
    "name": "Skilled Care",
    "code": "80923A"
  }));

});

test('Get CGLItems - No Auth - 200 OK', async ({ request }) => {
  const CGLItems = await request.get(`CGLItems/`);

  // Check if the response is successful
  expect(CGLItems.status(), "Response Expected 200 OK").toBe(200);

  // Check if the response contains An Array of Objects
  expect(await CGLItems.json(), "Response Expected to be an Array").toBeInstanceOf(Array);

  // Check if the response contains the expected number of items
  expect(await CGLItems.json(), "Response Expected to have 35 Items").toHaveLength(35);

  // Check if the response contains the expected data in the first object
  expect(await CGLItems.json(), "Response Expected for First Object").toContainEqual(expect.objectContaining({
    "id": "7d0113a8-4b39-403a-8146-2f4b2fd2fa10",
    "description": "Apartment Building",
    "code": "60010",
    "cglpBase": "Per unit"
  }));

  // Check if the response contains the expected data in the last object
  expect(await CGLItems.json(), "Response Expected for Last Object").toContainEqual(expect.objectContaining({
    "id": "10ee4b48-a61b-47f7-8caa-ddb496ceeb0c",
    "description": "Vacant Land",
    "code": "49451",
    "cglpBase": "Per Acre"
  }));
});

test('Get CGLItems - Item 1 - No Auth - 200 OK', async ({ request }) => {
  const CGLItemsItem1 = await request.get(`CGLItems/7d0113a8-4b39-403a-8146-2f4b2fd2fa10/`);

  // Check if the response is successful
  expect(CGLItemsItem1.status(), "Response Expected 200 OK").toBe(200);

  // Check if the response contains An Array of Objects
  expect(await CGLItemsItem1.json(), "Response Expected to be an Array").toBeInstanceOf(Array);

  // Check if the response contains the expected number of items
  expect(await CGLItemsItem1.json(), "Response Expected to have 1 Item").toHaveLength(1);

  // Check if the response contains the expected data in the first object
  expect(await CGLItemsItem1.json(), "Response Expected for First Object").toContainEqual(expect.objectContaining({
    "id": "7d0113a8-4b39-403a-8146-2f4b2fd2fa10",
    "description": "Apartment Building",
    "code": "60010",
    "cglpBase": "Per unit"
  }));

});

test('Get CGLItems - Item N - No Auth - 200 OK', async ({ request }) => {
  const CGLItemsItemN = await request.get(`CGLItems/10ee4b48-a61b-47f7-8caa-ddb496ceeb0c/`);

  // Check if the response is successful
  expect(CGLItemsItemN.status(), "Response Expected 200 OK").toBe(200);

  // Check if the response contains An Array of Objects
  expect(await CGLItemsItemN.json(), "Response Expected to be an Array").toBeInstanceOf(Array);

  // Check if the response contains the expected number of items
  expect(await CGLItemsItemN.json(), "Response Expected to have 1 Item").toHaveLength(1);

  // Check if the response contains the expected data in the first object
  expect(await CGLItemsItemN.json(), "Response Expected for First Object").toContainEqual(expect.objectContaining({
    "id": "10ee4b48-a61b-47f7-8caa-ddb496ceeb0c",
    "description": "Vacant Land",
    "code": "49451",
    "cglpBase": "Per Acre"
  }));

});

test('Get Facility Professions - No Auth - 200 OK', async ({ request }) => {
  const FacilityProfessions = await request.get(`facilityprofession/`);

  // Check if the response is successful
  expect(FacilityProfessions.status(), "Response Expected 200 OK").toBe(200);

  // Check if the response contains An Array of Objects
  expect(await FacilityProfessions.json(), "Response Expected to be an Array").toBeInstanceOf(Array);

  // Check if the response contains the expected number of items
  expect(await FacilityProfessions.json(), "Response Expected to have 21 Items").toHaveLength(21);

  // Check if the response contains the expected data in the first object
  expect(await FacilityProfessions.json(), "Response Expected for First Object").toContainEqual(expect.objectContaining({
    "id": "cce71498-7f78-4b28-b5cb-055416bdbb3f",
    "description": "Laboratory Technicians"
  }));

  // Check if the response contains the expected data in the last object
  expect(await FacilityProfessions.json(), "Response Expected for Last Object").toContainEqual(expect.objectContaining({
    "id": "7ca1129d-75ed-4339-822a-feec8de33247",
    "description": "None"
  }));

});

test('Get Limits - No Auth - 200 OK', async ({ request }) => {
  const Limits = await request.get(`Limits/`);

  // Check if the response is successful
  expect(Limits.status(), "Response Expected 200 OK").toBe(200);

  // Check if the response contains An Array of Objects
  expect(await Limits.json(), "Response Expected to be an Array").toBeInstanceOf(Array);

  // Check if the response contains the expected number of items
  expect(await Limits.json(), "Response Expected to have 4 Items").toHaveLength(4);

  // Check if the response contains the expected data in the first object
  expect(await Limits.json(), "Response Expected for First Object").toContainEqual(expect.objectContaining({
    "id": "0df31c69-3331-4852-8a2f-2ed566ca6831",
    "limit": "$1,000,000/$3,000,000",
    "code": 72
  }));

  // Check if the response contains the expected data in the last object
  expect(await Limits.json(), "Response Expected for Last Object").toContainEqual(expect.objectContaining({
    "id": "57d14107-a022-4afb-8d13-fdbff68dc1e9",
    "limit": "$1,000,000/$3,000,000",
    "code": 72
  }));

});

test('Get States - No Auth - 200 OK', async ({ request }) => {
  const States = await request.get(`States/`);

  // Check if the response is successful
  expect(States.status(), "Response Expected 200 OK").toBe(200);

  // Check if the response contains An Array of Objects
  expect(await States.json(), "Response Expected to be an Array").toBeInstanceOf(Array);

  // Check if the response contains the expected number of items
  expect(await States.json(), "Response Expected to have 60 Items").toHaveLength(60);

  // Check if the response contains the expected data in the first object
  expect(await States.json(), "Response Expected for First Object").toContainEqual(expect.objectContaining({
    "name": "",
    "abbreviation": ""
  }));

  // Check if the response contains the expected data in the last object
  expect(await States.json(), "Response Expected for Last Object").toContainEqual(expect.objectContaining({
    "name": "Wyoming",
    "abbreviation": "WY"
  }));

});

test('Get Zips - No Auth - 200 OK', async ({ request }) => {
  const Zips = await request.get(`Zips/`);

  // Check if the response is successful
  expect(Zips.status(), "Response Expected 200 OK").toBe(200);

  // Check if the response contains An Array of Objects
  expect(await Zips.json(), "Response Expected to be an Array").toBeInstanceOf(Array);

  // Check if the response contains the expected number of items
  expect(await Zips.json(), "Response Expected to have 90 Items").toHaveLength(90);

  // Check if the response contains the expected data in the first object
  expect(await Zips.json(), "Response Expected for First Object").toContainEqual(expect.objectContaining({
    "id": "79b53343-a2d5-40ee-8ad0-001b306a87a6",
    "territory": "501",
    "zip": "02940"
  }));

  // Check if the response contains the expected data in the last object
  expect(await Zips.json(), "Response Expected for Last Object").toContainEqual(expect.objectContaining({
    "id": "fd4ef366-1425-42b1-8a26-f38e98c1b200",
    "territory": "503",
    "zip": "02842"
  }));

});