import { createSlice } from "@reduxjs/toolkit";
import contactsArray from "../contactsArray.json";
import { nanoid } from "nanoid";

export const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: contactsArray,
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, number) {
        return { payload: { id: nanoid(), name, number } };
      },
    },
    deleteContact(state, action) {},
  },
});

console.log(contactsSlice);

export const selectContacts = (state) => state.contacts.items;

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
