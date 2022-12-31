import { atom } from 'recoil';

/*---- Sidebar/ Feed Atoms ----*/
export const categoryStateAtom = atom({
	key: 'categoryState',
	default: '',
});

export const selectedIdStateAtom = atom({
	key: 'selectedIdState',
	default: null,
});

export const selectionAtom = atom({
	key: 'selection',
	default: null,
});

export const videosAtom = atom({
	key: 'videos',
	default: null,
});

/*----Search Atoms ----*/

export const searchedVideosAtom = atom({
	key: 'searchedVideos',
	default: null,
});

export const searchTermAtom = atom({
	key: 'searchTerm',
	default: null,
});

/*----Channnel Details Atoms ----*/

export const channelDetailsAtom = atom({
	key: 'channelDetails',
	default: null,
});

export const channelVideosAtom = atom({
	key: 'channelVideos',
	default: null,
});

export const playlistsAtom = atom({
	key: 'playlists',
	default: null,
});
