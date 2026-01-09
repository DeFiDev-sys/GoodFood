import { TrendingDown, TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";

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

export const description = "A multiple bar chart";

const chartData = [
  { day: "1", desktop: 186, mobile: 80 },
  { day: "2", desktop: 305, mobile: 200 },
  { day: "3", desktop: 237, mobile: 120 },
  { day: "4", desktop: 73, mobile: 190 },
  { day: "5", desktop: 209, mobile: 130 },
  { day: "6", desktop: 214, mobile: 140 },
  { day: "7", desktop: 45, mobile: 23 },
  { day: "8", desktop: 160, mobile: 98 },
  { day: "9", desktop: 12, mobile: 64 },
  { day: "10", desktop: 214, mobile: 9 },
  { day: "11", desktop: 90, mobile: 75 },
  { day: "12", desktop: 87, mobile: 32 },
];

// 1. Calculate this period's total (sum of desktop + mobile for all 12 days)
const thisPeriodTotal = chartData.reduce(
  (acc, curr) => acc + curr.desktop + curr.mobile,
  0
);

// 2. Assume you have last week's total (for comparison)
const lastWeekTotal = 7500;

const lastWeekPercentage = lastWeekTotal / 100;
const growthPercentageForLastWeek: number = Number(
  lastWeekPercentage.toFixed(1)
);

// 3. Calculate the growth percentage
const growthPercentage =
  ((thisPeriodTotal - lastWeekTotal) / lastWeekTotal) * 100;

const thisWeekPercentage: number = Number(growthPercentage.toFixed(1));

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#5A6ACF",
  },
  mobile: {
    label: "Mobile",
    color: "#E6E8EC",
  },
} satisfies ChartConfig;

export function ChartBarMultiple() {
  return (
    <Card className="border-0 shadow-none">
      <CardHeader className="space-y-2 px-0">
        <CardTitle className="flex items-center justify-between">
          <span>Revenue</span>
          <Button asChild className="border-none shadow-sm" variant="outline">
            <a href="#">View Report</a>
          </Button>
        </CardTitle>
        <CardDescription>IDR 7.852.000</CardDescription>
        <div className="flex gap-2 leading-none font-medium">
          {thisWeekPercentage > growthPercentageForLastWeek ? (
            <span className="flex items-center gap-2 text-[#149D52]">
              <TrendingUp fill="#149D52" className="h-4 w-4" />
              {thisWeekPercentage}%{" "}
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
          Sales from 1-12 Dec, 2020
        </div>
      </CardHeader>
      <CardContent className="px-0">
        <ChartContainer config={chartConfig} className="">
          <BarChart accessibilityLayer data={chartData} className="w-full">
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="day"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="desktop" fill="var(--color-desktop)" radius={4} />
            <Bar dataKey="mobile" fill="var(--color-mobile)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex items-center gap-8 text-sm">
        <div className="flex items-center gap-2">
          <div className="bg-[#5A6ACF] w-[10px] h-[10px] rounded-full"></div>
          <div>Desktop</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="bg-[#E6E8EC] w-[10px] h-[10px] rounded-full"></div>
          <div>Mobile</div>
        </div>
      </CardFooter>
    </Card>
  );
}
