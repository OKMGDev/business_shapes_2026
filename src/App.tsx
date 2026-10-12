import { useEffect, useState } from "react";
import { RadarChart } from "./components/RadarChart";
import { channels, scores, shapes, stageMeta, stages, strategyProfiles } from "./data";
import type { ChannelKey, ChannelScores, ShapeId, StageId } from "./types";

type Step = 1 | 2 | 3;

const EMPTY_SCORES: ChannelScores = {
  content: 0,
  website: 0,
  seo: 0,
  paid: 0,
  email: 0,
};

/** A score of 100 takes this long. Smaller scores finish sooner. */
const FULL_SCALE_MS = 1200;

function useCountUp(active: boolean, targets: ChannelScores | null) {
  const [shown, setShown] = useState<ChannelScores>(EMPTY_SCORES);

  useEffect(() => {
    if (!active || !targets) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setShown(targets);
      return;
    }

    const keys = Object.keys(targets) as ChannelKey[];
    const pointsPerMs = 100 / FULL_SCALE_MS;
    const longest = keys.reduce(
      (max, key) => Math.max(max, targets[key] / pointsPerMs),
      0
    );
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const elapsed = now - start;
      const grown = elapsed * pointsPerMs;
      const next = { ...EMPTY_SCORES };
      for (const key of keys) {
        next[key] = Math.min(targets[key], grown);
      }
      setShown(next);
      if (elapsed < longest) frame = requestAnimationFrame(tick);
    };

    setShown(EMPTY_SCORES);
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [active, targets]);

  return shown;
}

function topChannel(shape: ShapeId, stage: StageId): ChannelKey {
  const values = scores[shape][stage];
  return channels.reduce((best, channel) =>
    values[channel.key] > values[best] ? channel.key : best
  , channels[0].key);
}

export default function App() {
  const [step, setStep] = useState<Step>(1);
  const [shape, setShape] = useState<ShapeId | null>(null);
  const [stage, setStage] = useState<StageId | null>(null);

  useEffect(() => {
    const root = document.getElementById("root");
    if (!root) return;

    const postHeight = () => {
      const height = Math.ceil(root.getBoundingClientRect().height);
      window.parent.postMessage({ source: "okmg-business-shapes", height }, "*");
    };

    postHeight();
    const observer = new ResizeObserver(postHeight);
    observer.observe(root);
    return () => observer.disconnect();
  }, [step, shape, stage]);

  const ready = shape !== null && stage !== null;
  const current = ready ? scores[shape][stage] : null;
  const priority = ready ? topChannel(shape, stage) : null;
  const priorityLabel = channels.find((channel) => channel.key === priority)?.label;
  const shown = useCountUp(step === 3 && ready, current);

  return (
    <main className="app">
      {step === 1 && (
        <section>
          <header className="step-head">
            <p className="step-kicker">STEP 1/3</p>
            <h1>Business Shape</h1>
          </header>
          <div className="shape-grid">
            {shapes.map((item) => (
              <button
                key={item.id}
                type="button"
                className={item.id === shape ? "shape-card is-selected" : "shape-card"}
                onClick={() => {
                  setShape(item.id);
                  setStep(2);
                }}
              >
                <span className="shape-icon">
                  <img
                    src={item.icon}
                    alt=""
                    width={item.iconWidth}
                    height={item.iconHeight}
                  />
                </span>
                <span>
                  <span className="card-title">{item.label}</span>
                  <span className="card-sub">{item.sub}</span>
                </span>
              </button>
            ))}
          </div>
        </section>
      )}

      {step === 2 && (
        <section>
          <header className="step-head">
            <p className="step-kicker">STEP 2/3</p>
            <h1>Growth Stage</h1>
          </header>
          <div className="stage-grid">
            {stages.map((id) => (
              <button
                key={id}
                type="button"
                className={id === stage ? "stage-card is-selected" : "stage-card"}
                onClick={() => {
                  setStage(id);
                  setStep(3);
                }}
              >
                <span className="card-title">{stageMeta[id].title}</span>
                <span className="card-sub">{stageMeta[id].sub}</span>
              </button>
            ))}
          </div>
        </section>
      )}

      {step === 3 && ready && current && priority && priorityLabel && (
        <section>
          <header className="diag-head">
            <div className="step-head">
              <p className="step-kicker">STEP 3/3</p>
              <h1>Your Diagnostic</h1>
            </div>
            <div className="selection">
              <p>
                <span>Business Shape:</span>
                <button type="button" onClick={() => setStep(1)}>
                  {shape}
                </button>
              </p>
              <span className="selection-rule" aria-hidden="true" />
              <p>
                <span>Growth Stage:</span>
                <button type="button" onClick={() => setStep(2)}>
                  {stageMeta[stage].title}
                </button>
              </p>
            </div>
          </header>

          <div className="diagnostic">
            <RadarChart scores={shown} topChannel={priority} />
            <div className="score-list">
              {channels.map((channel) => (
                <div key={channel.key} className="score-row">
                  <div className="score-line">
                    <span>{channel.label}</span>
                    <strong>{Math.round(shown[channel.key])}</strong>
                  </div>
                  <div className="score-track">
                    <span style={{ width: `${shown[channel.key]}%` }} />
                  </div>
                </div>
              ))}
              <div className="priority">
                <div>
                  <p>Priority Channel</p>
                  <strong>{priorityLabel}</strong>
                </div>
                <b>{Math.round(shown[priority])}</b>
              </div>
            </div>
          </div>

          <div className="strategy">
            <span className="strategy-notch" aria-hidden="true" />
            <div className="strategy-copy">
              <h2>Strategy Profile</h2>
              <p>{strategyProfiles[shape][stage]}</p>
            </div>
            <div className="strategy-cta">
              <a href="https://okmg.com/contact" target="_top">
                <span>Talk to OKMG</span>
                <span className="cta-orb">
                  <img src="/icons/arrow.svg" alt="" width={16} height={15.1111} />
                </span>
              </a>
              <p>Free 30-minute strategy session</p>
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
