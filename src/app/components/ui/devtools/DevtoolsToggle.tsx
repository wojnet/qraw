"use client"
import { FC } from "react";
import { AppDispatch, RootState } from "@/lib/redux/store";
import { useSelector, useDispatch } from "react-redux"
import { toggleDevtools } from "@/lib/redux/features/devtoolsSlice";

interface DevtoolsToggleProps {
  
}

const DevtoolsToggle: FC<DevtoolsToggleProps> = ({}) => {
  const dispatch = useDispatch<AppDispatch>();
  const enabled = useSelector((state: RootState) => state.devtools.enabled);

  return (
    <div
      className={`w-10 h-6 flex items-center justify-start border border-[#444] rounded-full shadow-[1px_1px_0_#444] fixed bottom-3 left-3 select-none cursor-pointer p-[2px] hover:translate-[1px] hover:shadow-none ${ enabled ? "bg-blue-500" : "bg-neutral-100" } transition-colors duration-300`}
      onClick={() => dispatch(toggleDevtools())}
    >
      <div className={`h-full aspect-square rounded-full ${ enabled ? "bg-white translate-x-4" : "bg-[#444] translate-x-0" } transition-all duration-300`}>

      </div>
    </div>
  );
}

export default DevtoolsToggle;