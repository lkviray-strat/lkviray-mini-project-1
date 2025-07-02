import { AlertCircle, Check } from "lucide-react";
import { jetBrains } from "../../public/fonts/fonts";

type ToastCustomProps = {
  type: "SUCCESS" | "ERROR";
  children: React.ReactNode;
};

export const ToastCustom = ({ type, children }: ToastCustomProps) => {
  return (
    <>
      {type === "SUCCESS" ? (
        <div
          className={`${jetBrains.className} flex bg-[#1C8217] tablet:w-[380px] shadow-md text-white text-[14px] min-[500px]:pr-20  px-2 py-3.5 rounded-md`}
        >
          <Check
            className="size-6 inline mx-3"
            strokeWidth={3}
          />
          {children}
        </div>
      ) : (
        <div
          className={`${jetBrains.className} flex bg-red-600 shadow-md text-white text-[14px] min-[500px]:pr-20  px-2 py-3.5 rounded-md`}
        >
          <AlertCircle
            className="size-6 inline mx-3"
            strokeWidth={3}
          />
          {children}
        </div>
      )}
    </>
  );
};

export default ToastCustom;
