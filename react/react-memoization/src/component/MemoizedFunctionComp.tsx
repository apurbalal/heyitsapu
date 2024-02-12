import { getRandomColor } from "@/utils/getRandomColor";
import { memo } from "react";

// not using value, and callback. It's just to test re-rendering
type Props = { title: string, value?: Record<string, string>, callback?: () => void }
const Comp = ({ value, callback, title }: Props) => {
  console.log(`${title} rendering`);
  const backgroundColor = getRandomColor();
  return (
    <h2 style={{ border: "1px solid white", borderRadius: 8, padding: 24, backgroundColor }}>
      {title}
    </h2>
  )
};
export const MemoizedFunctionComp = memo(Comp);