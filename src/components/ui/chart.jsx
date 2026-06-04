import * as React from "react";
import * as RechartsPrimitive from "recharts";
import { cn } from "@/lib/utils";

// Themes
const THEMES = { light: "", dark: ".dark" };

const ChartContext = React.createContext(null);

function useChart() {
  const context = React.useContext(ChartContext);

  if (!context) {
    throw new Error("useChart must be used within a <ChartContainer />");
  }

  return context;
}

export function ChartContainer({ id, className, children, config, ...props }) {
  const uniqueId = React.useId();
  const chartId = `chart-${id || uniqueId.replace(/:/g, "")}`;

  return (
    <ChartContext.Provider value={{ config }}>
      <div
        data-chart={chartId}
        className={cn("flex aspect-video justify-center text-xs", className)}
        {...props}
      >
        <ChartStyle id={chartId} config={config} />
        <RechartsPrimitive.ResponsiveContainer>{children}</RechartsPrimitive.ResponsiveContainer>
      </div>
    </ChartContext.Provider>
  );
}

function ChartStyle({ id, config }) {
  if (!config) return null;

  const colorConfig = Object.entries(config).filter(([, item]) => item.theme || item.color);

  if (!colorConfig.length) return null;

  return (
    <style
      dangerouslySetInnerHTML={{
        __html: Object.entries(THEMES)
          .map(([theme, prefix]) => {
            return `
${prefix} [data-chart=${id}] {
${colorConfig
  .map(([key, item]) => {
    const color = (item.theme && item.theme[theme]) || item.color;

    return color ? `  --color-${key}: ${color};` : "";
  })
  .join("\n")}
}
`;
          })
          .join("\n"),
      }}
    />
  );
}

export const ChartTooltip = RechartsPrimitive.Tooltip;

export function ChartTooltipContent({ active, payload, className }) {
  const { config } = useChart();

  if (!active || !payload?.length) return null;

  return (
    <div className={cn("rounded-md border bg-background p-2 text-xs shadow", className)}>
      {payload.map((item, i) => {
        const key = item.dataKey;
        const itemConfig = config?.[key];

        return (
          <div key={i} className="flex justify-between gap-4">
            <span className="text-muted-foreground">{itemConfig?.label || item.name}</span>
            <span className="font-medium">{item.value}</span>
          </div>
        );
      })}
    </div>
  );
}

export const ChartLegend = RechartsPrimitive.Legend;

export function ChartLegendContent({ payload }) {
  const { config } = useChart();

  if (!payload?.length) return null;

  return (
    <div className="flex gap-4 justify-center text-xs">
      {payload.map((item, i) => {
        const itemConfig = config?.[item.dataKey];

        return (
          <div key={i} className="flex items-center gap-1">
            <div className="h-2 w-2" style={{ backgroundColor: item.color }} />
            <span>{itemConfig?.label || item.value}</span>
          </div>
        );
      })}
    </div>
  );
}
