import * as React from "react";
import { setStarted, TState } from "../state";
import { SnowFalling } from "../SnowFalling/SnowFalling";
import useSound from "use-sound";
// @ts-ignore
import fanfara from "./fanfara.mp3";
import "./style.css";
// @ts-ignore
import pohar from "./pohar.jpg";
import { useEffect } from "react";

type TProps = {
  state: TState;
  setState: (p: TState) => any;
};

export const SidebarFinish = ({ state, setState }: TProps) => {
  const [play] = useSound(fanfara);
  useEffect(play);

  return (
    <>
      <div className="shade-finish">
        <SnowFalling />
        <div className="popup-finish">
          <div className="nadpis-finish">
            <div className="shimmer">Gratulace! Gratulation!</div>
            <main>
              <div className="center">
                <figure>
                  <img src={pohar} alt="pohar" />
                  <figcaption>
                    Autor obrázku: macrovector, web: freepik.com
                  </figcaption>
                </figure>
                <p className="gratulace">
                  {" "}
                  To byl úžasný sjezd! <br />
                  Das war eine tolle Abfahrt!
                </p>
                <button
                  className="bublina-final"
                  onClick={() => setState(setStarted(false))}
                >
                  NOVÁ HRA
                </button>
              </div>
            </main>
          </div>
        </div>
      </div>
    </>
  );
};
