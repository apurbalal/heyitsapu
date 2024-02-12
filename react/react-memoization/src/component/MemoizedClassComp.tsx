import { getRandomColor } from "@/utils/getRandomColor";
import React from "react";

// not using value, and callback. It's just to test re-rendering
type Props = { title: string, value?: Record<string, string>, callback?: () => void }
export class MemoizedClassComp extends React.PureComponent<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render(): React.ReactNode {
    console.log(`${this.props.title} rendering`);
    const backgroundColor = getRandomColor(); 
    return (
      <h2 style={{ border: "1px solid white", borderRadius: 8, padding: 24, backgroundColor }}>
        {this.props.title}
      </h2>
    )
  }
}