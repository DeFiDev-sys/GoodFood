import { Pie, PieChart } from "recharts";
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

export const description = "A donut chart";

const chartData = [
  { time: "Afternoon", period: "1pm - 4pm", orders: 1890, fill: "#5A6ACF" },
  { time: "Evening", period: "4pm - 7pm", orders: 500, fill: "#8593ED" },
  { time: "Morning", period: "7am - 10am", orders: 190, fill: "#C7CEFF" },
];

const chartConfig = {
  orders: {
    label: "Orders",
  },
  Evening: {
    label: "Evening",
    color: "#8593ED",
  },
  Morning: {
    label: "Morning",
    color: "#C7CEFF",
  },
  Afternoon: {
    label: "Afternoon",
    color: "#5A6ACF",
  },
} satisfies ChartConfig;

//cal the total orders
const totalOrders = chartData.reduce((acc, curr) => acc + curr.orders, 0);

//cal the percentage for each order
const percentageOrders = chartData.map((item) => {
  const percentage = (item.orders / totalOrders) * 100;
  return {
    ...item,
    percentage: Number(percentage.toFixed(1)),
  };
});

export function ChartPieDonut() {
  return (
    <Card className="flex flex-col space-y-8 border-0 shadow-none w-full">
      <CardHeader className="space-y-2 px-4">
        <CardTitle className="flex items-center justify-between">
          <span>Order Time</span>
          <Button asChild className="border-none shadow-sm" variant="outline">
            <a href="#">View Report</a>
          </Button>
        </CardTitle>
        <CardDescription>From 1-6 Dec, 2020</CardDescription>
      </CardHeader>
      <CardContent className="flex-1 pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[250px]"
        >
          <PieChart>
            <ChartTooltip
              cursor={true}
              content={
                <ChartTooltipContent
                  className="bg-[#37375C] text-white"
                  hideIndicator
                  labelFormatter={(_, payload) => {
                    const item = payload?.[0]?.payload;
                    return (
                      <div className="flex flex-col gap-1">
                        <span className="text-sm font-bold">{item?.time}</span>
                        <span className="text-[#B0C3CC]">{item?.period}</span>
                      </div>
                    );
                  }}
                  formatter={(value) => (
                    <div className="flex flex-col mt-2">
                      <span className="text-xl font-bold">{value} orders</span>
                    </div>
                  )}
                />
              }
            />
            <Pie
              data={chartData}
              dataKey="orders"
              nameKey="time"
              innerRadius={60}
            />
          </PieChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex justify-between text-sm w-full border-0 shadow-none">
        {percentageOrders.map((item) => (
          <div key={item.time} className="flex gap-2">
            {item.time === "Afternoon" ? (
              <div className="bg-[#5A6ACF] w-[10px] h-[10px] rounded-full mt-2"></div>
            ) : item.time === "Evening" ? (
              <div className="bg-[#8593ED] w-[10px] h-[10px] rounded-full mt-2"></div>
            ) : (
              <div className="bg-[#C7CEFF] w-[10px] h-[10px] rounded-full mt-2"></div>
            )}
            <div className="flex flex-col justify-start">
              <div>{item.time}</div>
              <div>{item.percentage}%</div>
            </div>
          </div>
        ))}
      </CardFooter>
    </Card>
  );
}
