import { ReactElement } from "react";

interface Props {
  text?: string;
  icon?: ReactElement;
}

export default function Badge({ text, icon }: Props) {
  return (
    <div className="flex w-fit items-center gap-x-2 rounded-lg border border-gray-200 bg-gray-100 px-4 py-2 whitespace-nowrap dark:border-gray-1000 dark:bg-gray-1100">
      {icon}
      <h5>{text}</h5>
    </div>
  );
}
