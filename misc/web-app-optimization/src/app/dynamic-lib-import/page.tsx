"use client";
import pica from "pica";
import { createRef } from "react";

export default function DynamicLibImport() {
  const canvasRef = createRef<HTMLCanvasElement>();
  const resizeImage = async (imageFile: File) => {
    try {
      const picaInstance = pica();
      const image = new Image();
      image.src = URL.createObjectURL(imageFile);
      image.onload = async () => {
        if (canvasRef.current) {
          await picaInstance.resize(image, canvasRef.current, { });
        }
      }
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <input
        type="file"
        onChange={(event) => {
          const file = event.target.files?.[0];
          if (file) {
            resizeImage(file);
          }
        }}
      />
      <canvas id="canvas" ref={canvasRef} width={300} height={300} style={{ backgroundColor: "white"}}></canvas>
    </div>
  );
}
