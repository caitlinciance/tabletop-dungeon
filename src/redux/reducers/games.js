import { keyBy } from "lodash";
import { GAMES } from "../../shared/games";

const initialState = {
  map: keyBy(GAMES, "id"),
};

export default function (state = initialState, action) {
  console.log({ action, state });
  return state
}
