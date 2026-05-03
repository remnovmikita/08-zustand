// import { FormValues } from "@/components/NoteForm/NoteForm";

import { NewNote } from "./api";
import { create } from "zustand";
import { persist } from "zustand/middleware";

const initialDraft: NewNote = {
  title: '',
  content: '',
  tag: 'Todo',
};


type NoteDraftStore = {
draft : NewNote,
setDraft: (newNote: NewNote)=>void,
clearDraft: ()=> void
}



export const useNoteDraftStore = create<NoteDraftStore>()(persist((set) => ({
  draft: initialDraft,
  setDraft: (note) => set(() => ({draft:note})),
  clearDraft: () => set(() => ({draft: initialDraft}))
}),{
  name: "store-draft",
  partialize: (state) => ({draft:state.draft})
}))