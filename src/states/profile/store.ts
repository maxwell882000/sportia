import { slideButtonFactory } from "../factories/slideButton/slideButtonFactory.ts";
import { userDomain } from "../users/domain.ts";
import { defaultProfileOptions } from "../../dtos/profile/profile.ts";
import { sample } from "effector";
import { $profileOpened } from "./events.ts";
import { isAuth } from "../middlewares.ts";
import { Pages } from "../../constants/pages.ts";
import {
  $isSideBarChanged,
  $pageChanged,
  $searchPlaceholderRestore,
  $searchRestore,
} from "../events.ts";
import { delay } from "patronum";

export const { $slides: $profilesOption, $slideActivated: $profileActivated } =
  slideButtonFactory(userDomain, defaultProfileOptions);

sample({
  source: $profileOpened,
  filter: () => isAuth(),
  fn: () => Pages.PROFILE,
  target: [$pageChanged, $searchPlaceholderRestore, $searchRestore],
});

sample({
  source: delay({ source: $profileOpened, timeout: 200 }),
  filter: () => isAuth(),
  fn: () => true,
  target: [$isSideBarChanged],
});
