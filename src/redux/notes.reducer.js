const initialState = {
    notes: JSON.parse(localStorage.getItem("notes") || "[]"),
    selectedNote: {},
    appInitialized: false,
    editOn: false,
    isMenuOpen: true
}

const reducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case "GET_NOTES":
            return { ...state, notes: [...payload], appInitialized: true }
        case "DELETE_NOTE":
            localStorage.setItem("notes", JSON.stringify([...payload]))
            return { ...state, notes: [...payload] }
        case "NOTE_SELECTED":
            return { ...state, selectedNote: { ...payload } }
        case "NOTE_UNSELECTED":
            return { ...state, selectedNote: { ...payload } }
        case "UPDATE_NOTE":
            localStorage.setItem("notes", JSON.stringify([...payload]))
            return { ...state, notes: [...payload] }
        case "MENU":
            return { ...state, isMenuOpen: !state.isMenuOpen }
        case "EDIT":
            return { ...state, editOn: !state.editOn }
        default:
            return state
    }
}

export default reducer


export const $get_notes = (notes) => ({ type: "GET_NOTES", payload: notes })
export const $delete_note = (notes) => ({ type: "DELETE_NOTE", payload: notes })
export const $select_note = (notes) => ({ type: "NOTE_SELECTED", payload: notes })
export const $unselect_note = (notes) => ({ type: "NOTE_UNSELECTED", payload: {} })
export const $update_note = (notes) => ({ type: "UPDATE_NOTE", payload: notes })
export const $menu = (notes) => ({ type: "MENU" })
export const $edit = (notes) => ({ type: "EDIT" })