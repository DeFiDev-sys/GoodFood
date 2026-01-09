import { TrendingDown, TrendingUp } from "lucide-react";
import { CartesianGrid, Line, LineChart, XAxis } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { Button } from "../ui/button";

const chartData = [
  { day: "1", lastWeek: 186, thisWeek: 80 },
  { day: "2", lastWeek: 305, thisWeek: 200 },
  { day: "3", lastWeek: 237, thisWeek: 120 },
  { day: "4", lastWeek: 73, thisWeek: 190 },
  { day: "5", lastWeek: 209, thisWeek: 130 },
  { day: "6", lastWeek: 214, thisWeek: 140 },
];

const chartConfig = {
  lastWeek: {
    label: "lastWeek",
    color: "#5A6ACF",
  },
  thisWeek: {
    label: "thisWeek",
    color: "#E6E8EC",
  },
} satisfies ChartConfig;

// 1. Calculate this period's total (sum of lastWeek + mobile for all 12 days)
const thisPeriodTotal = chartData.reduce(
  (acc, curr) => acc + curr.lastWeek + curr.thisWeek,
  0
);

// 2. Assume you have last week's total (for comparison)
const lastWeekTotal = 7852;
const halflastWeekTotal = lastWeekTotal / 2;

const lastWeekPercentage = lastWeekTotal / 100;
const growthPercentageForLastWeek: number = Number(
  lastWeekPercentage.toFixed(1)
);

// 3. Calculate the growth percentage
const growthPercentage =
  ((thisPeriodTotal - halflastWeekTotal) / halflastWeekTotal) * 100;

const thisWeekPercentage: number = Number(growthPercentage.toFixed(1));

export function ChartLineLinear() {
  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="space-y-2 px-0">
        <CardTitle className="flex items-center justify-between">
          <span>Order</span>
          <Button asChild className="border-none shadow-sm" variant="outline">
            <a href="#">View Report</a>
          </Button>
        </CardTitle>
        <CardDescription>2568</CardDescription>
        <div className="flex gap-2 leading-none font-medium">
          {thisWeekPercentage > growthPercentageForLastWeek ? (
            <span className="flex items-center gap-2 text-[#149D52]">
              <TrendingUp fill="#149D52" className="h-4 w-4" />
              {thisWeekPercentage}%
            </span>
          ) : (
            <span className="flex items-center gap-2 text-[#FF0000]">
              <TrendingDown fill="#FF0000" className="h-4 w-4" />{" "}
              {thisWeekPercentage}%
            </span>
          )}
          vs last week
        </div>
        <div className="text-muted-foreground leading-none">
          Sales from 1-6 Dec, 2020
        </div>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel />}
            />
            <Line
              dataKey="lastWeek"
              type="linear"
              stroke="#5A6ACF"
              strokeWidth={2}
              dot={false}
            />
            <Line
              dataKey="thisWeek"
              type="linear"
              stroke="#E6E8EC"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex items-center gap-8 text-sm">
        <div className="flex items-center gap-2">
          <div className="bg-[#5A6ACF] w-[10px] h-[10px] rounded-full"></div>
          <div>Last Week</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-[#E6E8EC] w-[10px] h-[10px] rounded-full"></div>
          <div>This Week</div>
        </div>
      </CardFooter>
    </Card>
  );
}
