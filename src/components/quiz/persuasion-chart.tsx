'use client';

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const data = [
  { name: 'A', value: 20 },
  { name: 'B', value: 60 },
  { name: 'C', value: 100 },
];

const CustomizedDot = (props: any) => {
  const { cx, cy, payload } = props;

  if (!cx || !cy) return null;

  if (payload.name === 'A') {
    return (
      <circle cx={cx} cy={cy} r={9} stroke="#32D74B" strokeWidth={4} fill="#fff" />
    );
  }

  if (payload.name === 'B') {
    return (
      <g>
        <circle cx={cx} cy={cy} r={9} stroke="#FF453A" strokeWidth={4} fill="#fff" />
      </g>
    );
  }

  if (payload.name === 'C') {
    return (
      <circle cx={cx} cy={cy} r={9} stroke="#FF453A" strokeWidth={4} fill="#fff" />
    );
  }

  return null;
};

const CustomizedLabel = (props: any) => {
    const { x, y, index } = props;

    if (index === 1) { // Point B
        return (
            <g transform={`translate(${x}, ${y})`}>
                <rect x={-28} y={-45} width={56} height={24} rx={12} fill="#8B0000" />
                <text x={0} y={-33} textAnchor="middle" fill="#fff" fontSize="12px" fontWeight="bold">
                    Você
                </text>
            </g>
        );
    }
    if (index === 2) { // Point C
        return (
            <g transform={`translate(${x}, ${y})`}>
                 <rect x={-32} y={-45} width={64} height={22} rx={11} fill="#f8f9fa" />
                 <text x={0} y={-34} textAnchor="middle" fill="#1C1C1E" fontSize="12px" fontWeight="600">
                    Objetivo
                </text>
            </g>
        );
    }
    return null;
};


const PersuasionChart = () => {
  return (
    <div style={{ width: '100%', height: 200 }} className="my-8">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 50,
            right: 30,
            left: 30,
            bottom: 5,
          }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0%" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="#32D74B" />
              <stop offset="50%" stopColor="#FFD60A" />
              <stop offset="75%" stopColor="#FF9F0A" />
              <stop offset="100%" stopColor="#FF453A" />
            </linearGradient>
            <linearGradient id="fillGradient" x1="0%" y1="0" x2="100%" y2="0">
              <stop offset="0%" stopColor="#32D74B" stopOpacity={0.6} />
              <stop offset="50%" stopColor="#FFD60A" stopOpacity={0.5} />
              <stop offset="100%" stopColor="#FF453A" stopOpacity={0.5} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="#D9D9D9" vertical={true} horizontal={true} />
          <XAxis 
            dataKey="name" 
            tickLine={false} 
            axisLine={false} 
            tick={{ fill: '#1C1C1E', fontWeight: '500', fontSize: 14 }} 
            dy={10}
            interval={0}
          />
          <YAxis hide domain={[0, 'dataMax + 40']} />
          <Area
            type="monotone"
            dataKey="value"
            stroke="url(#lineGradient)"
            strokeWidth={5}
            fill="url(#fillGradient)"
            activeDot={false}
            dot={<CustomizedDot />}
            label={<CustomizedLabel />}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PersuasionChart;
