import { channels, radarOrder } from "../data";
import type { ChannelKey, ChannelScores } from "../types";

const SIZE = 300;
const CENTER = SIZE / 2;
const RADIUS = 92;
const PAD = 72;
const AXES = radarOrder.length;

function point(index: number, radius: number): [number, number] {
  const angle = (Math.PI * 2 * index) / AXES - Math.PI / 2;
  return [
    CENTER + radius * Math.cos(angle),
    CENTER + radius * Math.sin(angle),
  ];
}

function ringPath(radius: number): string {
  return (
    radarOrder
      .map((_, index) => {
        const [x, y] = point(index, radius);
        return `${index === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`;
      })
      .join(" ") + " Z"
  );
}

type RadarChartProps = {
  scores: ChannelScores;
  topChannel: ChannelKey;
};

export function RadarChart({ scores, topChannel }: RadarChartProps) {
  const rings = [0.2, 0.4, 0.6, 0.8, 1];
  const vertices = radarOrder.map((key, index) =>
    point(index, (scores[key] / 100) * RADIUS)
  );
  const shape =
    vertices
      .map(([x, y], index) => `${index === 0 ? "M" : "L"}${x.toFixed(2)} ${y.toFixed(2)}`)
      .join(" ") + " Z";

  return (
    <svg
      className="radar"
      viewBox={`${-PAD} ${-PAD} ${SIZE + PAD * 2} ${SIZE + PAD * 2}`}
      role="img"
      aria-label="Channel scores"
    >
      {rings.map((ring) => (
        <path
          key={ring}
          d={ringPath(RADIUS * ring)}
          fill="none"
          stroke={ring === 1 ? "#d5d5d5" : "#e7e7e7"}
          strokeWidth={ring === 1 ? 1.25 : 1}
        />
      ))}
      {radarOrder.map((key, index) => {
        const [x, y] = point(index, RADIUS);
        return (
          <line
            key={key}
            x1={CENTER}
            y1={CENTER}
            x2={x}
            y2={y}
            stroke="#e7e7e7"
            strokeWidth={1}
          />
        );
      })}
      <path d={shape} fill="rgba(168, 176, 188, 0.42)" stroke="#0d28c3" strokeWidth={1.75} />
      {vertices.map(([x, y], index) => {
        const key = radarOrder[index];
        const isTop = key === topChannel;
        return (
          <circle
            key={key}
            cx={x}
            cy={y}
            r={isTop ? 5.5 : 3.2}
            fill={isTop ? "#ffffff" : "#0d28c3"}
            stroke="#0d28c3"
            strokeWidth={isTop ? 1.75 : 0}
          />
        );
      })}
      {radarOrder.map((key, index) => {
        const [x, y] = point(index, RADIUS + 34);
        const label = channels.find((channel) => channel.key === key)?.label ?? key;
        let anchor: "start" | "middle" | "end" = "middle";
        if (x > CENTER + 24) anchor = "start";
        else if (x < CENTER - 24) anchor = "end";
        return (
          <g key={key}>
            <text
              x={x}
              y={y - 8}
              textAnchor={anchor}
              className="radar-label"
            >
              {label}
            </text>
            <text x={x} y={y + 10} textAnchor={anchor} className="radar-score">
              {scores[key]}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
