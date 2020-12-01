import React from 'react';
import { setStarted } from '../state';
import { SnowFalling } from '../SnowFalling/SnowFalling';
import './style.css';
import foto_lyzar_cil from './foto_lyzar_cil.jpg';

export const SidebarFinish = ({ state, setState }) => {
  return (
    <>
      <div className="sidebar-finish">
        <SnowFalling />
        <div className="nadpis-finish">
          <div className="shimmer">Gratulace! Gratulation!</div>
          <main>
            <div className="center">
              <figure>
                <img src={foto_lyzar_cil} alt="lyzar v cili" />
                <figcaption>Photo by Sebastian Staines on Unsplash</figcaption>
              </figure>
              <p className="gratulace">
                {' '}
                To byl úžasný sjezd! <br />
                Das war eine tolle Abfahrt!
              </p>
              <button
                className="bublina-final start"
                onClick={() => setState(setStarted(state, false))}
              >
                NOVÁ HRA
              </button>
            </div>
          </main>
        </div>
      </div>
    </>
  );
};
