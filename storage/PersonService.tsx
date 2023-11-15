import { containsKey, getData, removeData, storeData } from "./AsyncService";
import data from "../data/personData.json";
import { Person } from "../models/Person";


// Init Person
export const initPersons = async (): Promise<boolean> => {
  const hasPersons = await containsKey("person-data");

  if (!hasPersons) {
    await storeData("person-data", data);
    return true;
  }

  return false;
};

// Get persons
export const getPersons = async (): Promise<Person[]> => {
  const persons = await getData("person-data");
  return persons;
};

// Remove all persons
export const removeAllPersons = async () => {
  await removeData("person-data");
};