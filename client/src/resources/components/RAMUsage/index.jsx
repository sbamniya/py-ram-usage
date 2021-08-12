import dayjs from "dayjs";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React, { useMemo, useState } from "react";
import { Card, Spinner } from "react-bootstrap";
import { useQuery } from "react-query";
import { getRamUsage } from "../../../services/usage";

const options = {
  title: {
    text: "",
  },
  legend: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
  series: [
    {
      name: "Usage",
      type: "spline",
      data: [],
    },
  ],
  xAxis: {
    categories: ["Used"],
    labels: {
      style: {
        color: "#595975",
        fontWeight: "700",
      },
    },
  },
  yAxis: {
    min: 0,
    title: {
      text: null,
    },
    labels: {
      style: {
        color: "#595975",
        fontWeight: "500",
      },
    },
    minRange: 4,
    gridLineDashStyle: "longdash",
  },
  label: {
    enabled: false,
  },
  plotOptions: {
    series: {
      borderRadiusTopLeft: 10,
      borderRadiusTopRight: 10,
      pointWidth: 20,
      color: "#1778B7",
      crisp: true,
      label: {
        enabled: false,
      },
    },
    animation: {
      duration: 2000,
    },
  },
};

const RAMUsage = () => {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const { isLoading } = useQuery(["ram-usage"], () => getRamUsage(), {
    onSuccess: (response) => {
      setData((prevData) => [...prevData, response.used]);
      setCategories((prevCategories) => [
        ...prevCategories,
        dayjs().format("YYYY-MM-DD HH:mm"),
      ]);
    },
  });
  const chartOptions = useMemo(
    () =>
      data
        ? {
            ...options,
            xAxis: {
              ...options.xAxis,
              categories,
            },
            series: [
              {
                ...options.series[0],
                data,
              },
            ],
          }
        : options,
    [categories, data]
  );

  return (
    <Card>
      <Card.Header>RAM Usage</Card.Header>
      <Card.Body>
        {isLoading ? (
          <Spinner animation="border" />
        ) : (
          <HighchartsReact
            highcharts={Highcharts}
            options={chartOptions}
            allowChartUpdate
            immutable={false}
            updateArgs={[true, true, true]}
          />
        )}
      </Card.Body>
    </Card>
  );
};

export default RAMUsage;
