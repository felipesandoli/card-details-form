import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="background"></div>
      <div className="card-container">
        <div className="card-front"></div>
        <div className="card-back"></div>
      </div>
    </main>
  );
}
