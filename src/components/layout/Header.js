import MainContainer from "./MainContainer";

export default function Header() {
  const links = {
    "Born Monday": "http://localhost:3000/",
    "Married Tuesday": "http://localhost:3000/",
    "Fell ill Wednesday": "http://localhost:3000/",
    "Got worse Thursday": "http://localhost:3000/",
  };

  return (
    <header className="text-white border-b backdrop-blur-sm">
      <MainContainer>
        <div className="flex flex-row items-center min-h-[64px] gap-8 justify-between">
          <a href="http://localhost:3000/" className="hover:text-primary">
            <h2 className="uppercase font-bold">S0l0m0n Grundy</h2>
          </a>
          <div className="flex flex-row items-center h-full gap-4">
            {Object.entries(links).map(([text, url]) => (
              <div key={text}>
                <a href={url} className="hover:text-primary">
                  {text}
                </a>
              </div>
            ))}
          </div>
        </div>
      </MainContainer>
    </header>
  );
}
