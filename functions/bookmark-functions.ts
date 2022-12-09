import AsyncStorage from "@react-native-async-storage/async-storage";
export async function createStorage() {
  const defaultValue = {
    BooBubbles: false,
    Cladistics: false,
    DryIceCommets: false,
  };
  const stringified = JSON.stringify(defaultValue);
  await AsyncStorage.setItem("bookmarks", stringified);
  console.log("bookmark storage created with value: " + stringified);
}

//Gets the store value from a key and returns it in object form
export async function getStorage(key: string) {
  const value = await AsyncStorage.getItem(key);
  if (value == null) return;
  return JSON.parse(value);
}

//Sets the store value from a key to object
export async function setStorage(key: string, object: object) {
  const stringified = JSON.stringify(object);
  await AsyncStorage.setItem(key, stringified);
}
