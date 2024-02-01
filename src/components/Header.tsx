import ModeNightIcon from "@mui/icons-material/ModeNight";
import LightModeIcon from "@mui/icons-material/LightMode";
import SettingsIcon from "@mui/icons-material/Settings";
import { toggleMode } from "../store/mode-slice";
import { useDispatch, useSelector } from "react-redux";
import { toggleModal } from "../store/modal-slice";

export default function Header() {
  const colorMode = useSelector((state: any) => state.modeToggle.value);
  const dispatch = useDispatch();

  function handleMode() {
    dispatch(toggleMode());
  }

  function handleToggleModal() {
    dispatch(toggleModal());
  }

  return (
    <nav className="flex w-full justify-between">
      <div onClick={handleMode} className="ml-2">
        {colorMode === "light" ? <ModeNightIcon /> : <LightModeIcon />}
      </div>
      <h1 className="text-7xl mb-8">Pomodoro</h1>
      <SettingsIcon className="mr-2" onClick={handleToggleModal} />
    </nav>
  );
}
