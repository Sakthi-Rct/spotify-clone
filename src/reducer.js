export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // token:
  //   "BQBsTsgyiXURTh8BMMrtmCkxVZ_wB1kBqXLmh17__w-HUsnIQcSeHobkVKE0r-jNKrZ549GkUung_AaNvcARfQxFXTob0FytvWZ8U8U4KetIM2bniLRww8JTEPzh-3rf_IC8mtc-YzII7Mmm-MlzsQbc4fF9YWthehGlaSZSGmKKFsN9",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    case "SET_DISCOVER_WEEKLY":
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    default:
      return state;
  }
};

export default reducer;
