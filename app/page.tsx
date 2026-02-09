import Generator from "@/components/Generator";

export default function Home() {
  return (
    <main className="main-container">
      <header className="header">
        <h1>IP Generator</h1>
        <p>Create inspiring music and video concepts</p>
      </header>
      <Generator />
    </main>
  );
}
