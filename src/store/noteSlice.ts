import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Note {
	id: number;
	title: string;
	date: string;
	description: string;
	status: string;
}

interface NotesState {
	notes: Note[];
}

const initialState: NotesState = {
	notes: JSON.parse(localStorage.getItem("notes") || "[]"),
};

const noteSlice = createSlice({
	name: "notes",
	initialState,
	reducers: {
		addNote: (state, action: PayloadAction<Note>) => {
			state.notes.push(action.payload);
			localStorage.setItem("notes", JSON.stringify(state.notes));
		},
		editNote: (state, action: PayloadAction<Note>) => {
			const index = state.notes.findIndex(note => note.id === action.payload.id);
			if (index !== -1) {
				state.notes[index] = action.payload;
				localStorage.setItem("notes", JSON.stringify(state.notes));
			}
		},
		deleteNote: (state, action: PayloadAction<number>) => {
			const index = state.notes.findIndex(note => note.id === action.payload);
			if (index !== -1) {
				state.notes[index].status = "deleted";
				localStorage.setItem("notes", JSON.stringify(state.notes));
			}
		},
		clearDeletedNotes: (state) => {
			state.notes = state.notes.filter(note => note.status !== "deleted");
			localStorage.setItem("notes", JSON.stringify(state.notes));
		},
	},
});

export const { addNote, editNote, deleteNote, clearDeletedNotes } = noteSlice.actions;
export default noteSlice.reducer;
