export const getGames = (state) => Object.values(state.games.map);

export const getGameById = (state, id) => state.games.map[id];
