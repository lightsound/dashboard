"use client";
import { Card, Metric, Text, Flex, ProgressBar, ColGrid } from "@tremor/react";
import { FC } from "react";

export const Cards: FC = () => {
  const categories = [
    {
      title: "Sales",
      metric: "$ 12,699",
      percentageValue: 15.9,
      target: "$ 80,000",
    },
    {
      title: "Profit",
      metric: "$ 45,564",
      percentageValue: 36.5,
      target: "$ 125,000",
    },
    {
      title: "Customers",
      metric: "1,072",
      percentageValue: 53.6,
      target: "2,000",
    },
  ];

  return (
    <ColGrid numColsSm={2} numColsLg={3} gapX="gap-x-6" gapY="gap-y-6">
      {categories.map((item) => (
        <Card key={item.title}>
          <Text>{item.title}</Text>
          <Metric>{item.metric}</Metric>
          <Flex marginTop="mt-4">
            <Text
              truncate={true}
            >{`${item.percentageValue}% (${item.metric})`}</Text>
            <Text>{item.target}</Text>
          </Flex>
          <ProgressBar
            percentageValue={item.percentageValue}
            marginTop="mt-2"
          />
        </Card>
      ))}
    </ColGrid>
  );
};
