import { useCallback, useEffect, useRef } from "react";
import ParticleEmitter from "../../scripts/vfx/ParticleEmitter";
import RootVFX from "../../scripts/vfx/RootVFX";
import ColorSpectrum from "../../scripts/vfx/ColorSpectrum";

export default function BackgroundVFX({ particleCount = 100, particleConnect = 100, ...props }) {
  /** @type {React.MutableRefObject<HTMLCanvasElement?>} */
  const canvas = useRef(null);
  const onResize = useCallback(() => {
    canvas.current.width = canvas.current.parentElement.clientWidth;
    canvas.current.height = canvas.current.parentElement.clientHeight;
  }, [canvas]);

  useEffect(() => {
    let vfx;

    window.addEventListener("resize", onResize, false);
    onResize();

    if (canvas.current) {
      vfx = new RootVFX(canvas.current);
      vfx.addChild(new ColorSpectrum(["#2e1065", "#4c1d95", "#581c87", "#3b0764"]));
      vfx.addChild(new ParticleEmitter(particleCount, { connect: particleConnect }));
      vfx.init();
      vfx.start();
    }

    return () => {
      vfx?.stop();
      window.removeEventListener("resize", onResize);
    };
  }, [onResize, particleCount, particleConnect]);

  return <canvas ref={canvas} {...props} />;
}
