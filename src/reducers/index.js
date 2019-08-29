import { combineReducers } from "redux";

const songReducer = () => {
	return [
		{ title: "Rocketman", duration: "4:05" },
		{ title: "Your Song", duration: "3:15" },
		{ title: "Tiny Dancer", duration: "3:12" },
		{ title: "Don't Go Breaking My Heart", duration: "3:44" }
	];
};

const selectedSongReducer = (selectedSong = null, action) => {
	if (action.type === "SONG_SELECTED") {
		return action.payload;
	}

	return selectedSong;
};

export default combineReducers({
	songs: songReducer,
	selectedSong: selectedSongReducer
});
