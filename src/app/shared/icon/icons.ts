/**
 * Line icons, 24 x 24 grid, drawn with a 1.6 stroke.
 * Each icon is a list of SVG path commands, so no innerHTML is needed.
 */
const circle = (cx: number, cy: number, r: number) => `M${cx} ${cy - r}a${r} ${r} 0 1 0 0 ${r * 2}a${r} ${r} 0 1 0 0 ${-r * 2}z`;

export const ICONS: Record<string, string[]> = {
  // Services
  clipboard: ['M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2h-2', 'M9 2.5h6v3H9z', 'M8.5 13.5l2.5 2.5 4.5-5'],
  chip: ['M7 7h10v10H7z', 'M10 10h4v4h-4z', 'M9.5 3v4M14.5 3v4M9.5 17v4M14.5 17v4M3 9.5h4M3 14.5h4M17 9.5h4M17 14.5h4'],
  shield: ['M12 3l8 3v6c0 4.8-3.4 8-8 9-4.6-1-8-4.2-8-9V6z', 'M8.5 12l2.5 2.5 4.5-5'],
  expand: ['M4 14v6h6', 'M20 10V4h-6', 'M4 20l6.5-6.5', 'M20 4l-6.5 6.5'],
  layers: ['M12 3l9 4.5-9 4.5-9-4.5z', 'M3 12l9 4.5 9-4.5', 'M3 16.5l9 4.5 9-4.5'],
  pulse: ['M3 12h4l2.5-6 4 12 2.5-6H21'],

  // Solutions
  gauge: ['M4 17a8 8 0 1 1 16 0', 'M12 17l4.5-5.5', circle(12, 17, 1)],
  lock: ['M5.5 11h13v10h-13z', 'M8 11V8a4 4 0 0 1 8 0v3', 'M12 15v2.5'],
  server: ['M4 4h16v6.5H4z', 'M4 13.5h16V20H4z', 'M7.5 7.25h.01M7.5 16.75h.01', 'M11 7.25h5.5M11 16.75h5.5'],
  compass: [circle(12, 12, 9), 'M15.5 8.5l-2 5-5 2 2-5z'],
  pound: ['M16.5 6.5A4 4 0 0 0 9 8.5V20', 'M6 20h12', 'M6 13.5h8'],

  // Practices and technologies
  network: ['M10 3h4v4h-4z', 'M3 17h4v4H3z', 'M17 17h4v4h-4z', 'M12 7v5', 'M5 17v-5h14v5'],
  headset: ['M4 15v-3a8 8 0 0 1 16 0v3', 'M4 14h3.5v6H4z', 'M16.5 14H20v6h-3.5z', 'M20 20c0 1-1 1.5-2.5 1.5H14'],
  briefcase: ['M3 8h18v12H3z', 'M8.5 8V5h7v3', 'M3 13h18'],
  database: ['M4 6c0-1.7 3.6-3 8-3s8 1.3 8 3-3.6 3-8 3-8-1.3-8-3z', 'M4 6v12c0 1.7 3.6 3 8 3s8-1.3 8-3V6', 'M4 12c0 1.7 3.6 3 8 3s8-1.3 8-3'],
  archive: ['M3 4h18v4.5H3z', 'M5 8.5V20h14V8.5', 'M10 12.5h4'],
  boxes: ['M3.5 3.5h7v7h-7z', 'M13.5 3.5h7v7h-7z', 'M3.5 13.5h7v7h-7z', 'M13.5 13.5h7v7h-7z'],
  chat: ['M4 5h16v11H9.5L4 20.5z', 'M8 9.5h8M8 12.5h5'],
  laptop: ['M5 5h14v10H5z', 'M2.5 19h19'],
  cloud: ['M7 18.5a4 4 0 0 1-.6-7.96A6 6 0 0 1 18 11.5a3.5 3.5 0 0 1-.5 7z'],

  // Interface
  phone: ['M5 3.5h3.5l2 5-2.5 1.5a11 11 0 0 0 6 6l1.5-2.5 5 2v3.5a2 2 0 0 1-2 2A17 17 0 0 1 3 5.5a2 2 0 0 1 2-2z'],
  mail: ['M3 5h18v14H3z', 'M3.5 6l8.5 7 8.5-7'],
  pin: ['M12 21.5s-7-6-7-11.5a7 7 0 0 1 14 0c0 5.5-7 11.5-7 11.5z', circle(12, 10, 2.5)],
  arrow: ['M5 12h14', 'M13 6l6 6-6 6'],
  clock: [circle(12, 12, 9), 'M12 7v5l3.5 2'],
  calendar: ['M4 5h16v16H4z', 'M4 10h16', 'M8.5 3v4M15.5 3v4'],
  user: [circle(12, 8, 4), 'M4.5 21a7.5 7.5 0 0 1 15 0'],
  check: ['M5 12.5l4.5 4.5L19 7.5'],
  sun: [circle(12, 12, 4), 'M12 2.5v2M12 19.5v2M2.5 12h2M19.5 12h2M5.3 5.3l1.4 1.4M17.3 17.3l1.4 1.4M5.3 18.7l1.4-1.4M17.3 6.7l1.4-1.4'],
  moon: ['M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z'],
};
