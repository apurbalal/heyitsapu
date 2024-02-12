import { getRandomColor } from "@/utils/getRandomColor";

export const FunctionComp = ({ title }: { title: string }) => {
  console.log(`${title} rendering`);
  const backgroundColor = getRandomColor();
  return (
    <h2 style={{ border: "1px solid white", borderRadius: 8, padding: 24, backgroundColor }}>
      {title}
    </h2>
  )
}