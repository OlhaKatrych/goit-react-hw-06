import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
import contactsArray from "../contactsArray.json";

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
    deleteContact(state, action) {
      state.items.filter((item) => item.id !== action.payload);
    },
  },
});

console.log(contactsSlice);

export const selectContacts = (state) => state.contacts.items;

export const { addContact, deleteContact } = contactsSlice.actions;

export default contactsSlice.reducer;
