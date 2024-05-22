import { PhotoCarousel } from "@/component/PhotoCarousel";

/* eslint-disable @next/next/no-img-element */
export default function Home() {
  return (
    <div style={{ height: "100vh", width: "100vw",display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ width: "100%", maxWidth: "600px", padding: "20px" }}>
        <PhotoCarousel>
          <img src="/poster/1.jpg" width="100%" height="100%" alt="1" />
          <img src="/poster/2.jpg" width="100%" height="100%" alt="2" />
          <img src="/poster/3.jpg" width="100%" height="100%" alt="3" />
          <img src="/poster/4.jpg" width="100%" height="100%" alt="4" />
        </PhotoCarousel>
      </div>
    </div>
  );
}
