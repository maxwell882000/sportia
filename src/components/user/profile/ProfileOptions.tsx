import { useUnit } from "effector-react";
import SlideButton from "../../slide/SlideButton.tsx";
import {
  $profileActivated,
  $profilesOption,
} from "../../../states/profile/store.ts";

function ProfileOptions() {
  const [profilesOption, profileActivated] = useUnit([
    $profilesOption,
    $profileActivated,
  ]);
  return (
    <SlideButton
      items={profilesOption}
      onClick={(item) => profileActivated(item)}
    />
  );
}

export default ProfileOptions;
