'use client';

import {
  Area,
  AreaChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ReferenceDot,
  Label,
} from 'recharts';
import { ChartContainer } from '@/components/ui/chart';


const chartData = [
  { stage: 'A', value: 20 },
  { stage: 'B', value: 50 },
  { stage: 'C', value: 100 },
];

const chartConfig = {
  value: {
    label: 'Pontuação',
  },
};

const YouAreHereLabel = (props: any) => {
  const { x, y } = props;
  return (
    <foreignObject x={x - 28} y={y - 40} width="56" height="24">
        <div 
            xmlns="http://www.w3.org/1999/xhtml"
            style={{ backgroundColor: '#FF453A', color: 'white' }}
            className="flex items-center justify-center rounded-md px-2 py-1 text-xs font-bold"
        >
            Você
        </div>
    </foreignObject>
  );
};

export function PersuasiveChart() {
  return (
    <div className="my-8 flex flex-col items-center">
      <div className="w-full max-w-lg h-56">
      <ChartContainer config={chartConfig} className="w-full h-full">
        <AreaChart
          data={chartData}
          accessibilityLayer
          margin={{
            top: 40,
            right: 25,
            left: 5,
            bottom: 0,
          }}
        >
          <defs>
              <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#32D74B" />
                  <stop offset="50%" stopColor="#FFD60A" />
                  <stop offset="100%" stopColor="#FF453A" />
              </linearGradient>
              <linearGradient id="areaGradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#32D74B" stopOpacity={0.6} />
                  <stop offset="50%" stopColor="#FFD60A" stopOpacity={0.5} />
                  <stop offset="100%" stopColor="#FF453A" stopOpacity={0.4} />
              </linearGradient>
          </defs>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="stage" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }} />
          <YAxis
            tickLine={false}
            axisLine={false}
            tick={false}
            domain={[0, 120]}
          />
          <Tooltip
            cursor={false}
            contentStyle={{display: 'none'}}
          />
          <Area
            dataKey="value"
            type="monotone"
            stroke="url(#lineGradient)"
            strokeWidth={4}
            fillOpacity={1}
            fill="url(#areaGradient)"
          />
           <ReferenceDot x="A" y={20} r={6} fill="white" stroke="#32D74B" strokeWidth={2} />
           <ReferenceDot x="B" y={50} r={6} fill="#FF453A" stroke="white" strokeWidth={2}>
             <Label content={<YouAreHereLabel />} />
           </ReferenceDot>
           <ReferenceDot x="C" y={100} r={6} fill="white" stroke="#FF453A" strokeWidth={2} />
        </AreaChart>
      </ChartContainer>
      </div>
    </div>
  );
}
