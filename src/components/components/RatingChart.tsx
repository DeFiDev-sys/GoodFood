import {
  Label,
  PolarGrid,
  PolarRadiusAxis,
  RadialBar,
  RadialBarChart,
} from "recharts";
import { ChartContainer, type ChartConfig } from "@/components/ui/chart";

export function ChartRadialText({
  data,
}: {
  data: {
    FoodTaste: string;
    percent: number;
    fill: string;
    className?: string | undefined;
    position?: string;
    startAngle?: number;
    endAngle?: number;
  };
}) {
  const chartConfig = {
    percent: {
      label: data.percent,
    },
    FoodTaste: {
      label: data.FoodTaste,
      color: data.fill,
    },
  } satisfies ChartConfig;
  return (
    <ChartContainer
      config={chartConfig}
      className={`aspect-square w-[160px] ${data.position}`}
    >
      <RadialBarChart
        data={[data]}
        startAngle={data.startAngle}
        endAngle={data.endAngle}
        innerRadius={70}
        outerRadius={90}
      >
        <PolarGrid
          gridType="circle"
          radialLines={false}
          stroke="none"
          className={data.className}
          polarRadius={[35, 60]}
        />
        <RadialBar dataKey="percent" background cornerRadius={10} />
        <PolarRadiusAxis tick={false} tickLine={false} axisLine={false}>
          <Label
            content={({ viewBox }) => {
              if (viewBox && "cx" in viewBox && "cy" in viewBox) {
                return (
                  <text
                    x={viewBox.cx}
                    y={viewBox.cy}
                    textAnchor="middle"
                    dominantBaseline="middle"
                  >
                    <tspan
                      x={viewBox.cx}
                      y={viewBox.cy}
                      className="fill-white text-sm font-bold"
                    >
                      {data.percent.toLocaleString()}%
                    </tspan>
                    <tspan
                      x={viewBox.cx}
                      y={(viewBox.cy || 0) + 14}
                      className="fill-white"
                    >
                      {data.FoodTaste}
                    </tspan>
                  </text>
                );
              }
            }}
          />
        </PolarRadiusAxis>
      </RadialBarChart>
    </ChartContainer>
  );
}
