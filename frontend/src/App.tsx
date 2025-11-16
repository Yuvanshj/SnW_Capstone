import { HeroDemo } from "./components/comps/MainHeader";
import { ShootingStars } from "./components/comps/Mainbackground";
import Starfield from "./components/comps/Starfield";



function App() {
  return (
    <>
      <Starfield />
      {(() => {
        const configs = Array.from({ length: 10 }).map((_, i) => {
          const kind = i % 2;
          if (kind === 1) {
            return {
              minSpeed: 6,
              maxSpeed: 16,
              minDelay: 1400,
              maxDelay: 4200,
              starColor: "#C9F7FF",
              starWidth: 8,
              starHeight: 1,
            };
          }
          return {
            minSpeed: 1,
            maxSpeed: 6,
            minDelay: 3000,
            maxDelay: 9000,
            starColor: "#9EE7FF",
            starWidth: 5,
            starHeight: 1,
          };
        });

        return configs.map((cfg, idx) => <ShootingStars key={idx} {...cfg} />);
      })()}
      <div className="h-screen w-screen flex items-center justify-center relative">
        <HeroDemo />
      </div>
    </>
  );
}

export default App;
