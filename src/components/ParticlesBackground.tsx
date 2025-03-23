import React, { useCallback, useEffect, useState } from "react";
import Particles from "react-tsparticles";
import type { Engine } from "tsparticles-engine";
import { loadSlim } from "tsparticles-slim";

const ParticlesBackground: React.FC = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  // No renderizar el componente en el servidor
  if (!mounted || typeof window === "undefined") {
    return null;
  }

  return (
    <div className="absolute inset-0 z-[1]">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          fpsLimit: 60,
          particles: {
            color: {
              value: "#ffffff"
            },
            number: {
              value: 30,
              density: {
                enable: true,
                area: 800
              }
            },
            opacity: {
              value: 0.2
            },
            size: {
              value: { min: 1, max: 3 }
            },
            move: {
              enable: true,
              speed: 1,
              random: true
            }
          },
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "bubble"
              }
            },
            modes: {
              bubble: {
                distance: 150,
                size: 6,
                opacity: 0.5
              }
            }
          },
          detectRetina: false
        }}
      />
    </div>
  );
};

export default ParticlesBackground; 