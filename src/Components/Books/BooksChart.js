import React from "react";
import Chart from "../Chart/Chart";

const BooksChart = (props) => {
  const chartDataPoints = [
    { label: "I", value: 0 },
    { label: "II", value: 0 },
    { label: "III", value: 0 },
    { label: "IV", value: 0 },
    { label: "V", value: 0 },
    { label: "VI", value: 0 },
    { label: "VII", value: 0 },
    { label: "VIII", value: 0 },
    { label: "IX", value: 0 },
    { label: "X", value: 0 },
    { label: "XI", value: 0 },
    { label: "XII", value: 0 },
    { label: "XIII", value: 0 },
    { label: "XIV", value: 0 },
    { label: "XV", value: 0 },
    { label: "XVI", value: 0 },
    { label: "XVII", value: 0 },
    { label: "XVIII", value: 0 },
    { label: "XIX", value: 0 },
    { label: "XX", value: 0 },
    { label: "XXI", value: 0 }
  ];

//   const [filteredYear, setFilteredYear] = useState("2020");

//   const filterChangeHandler = (selectedYear) => {
//     setFilteredYear(selectedYear);
//   };

//   const filteredBooks = props.items.filter((book) => {
//     return book.year.getFullYear().toString() === filteredYear;
//   });

  for (const book of props.books) {
    const bookMonth = book.year.getMonth();
    chartDataPoints[bookMonth].value += 1;
  }

  const FancyChart = React.forwardRef((props, ref) => (
    <Chart ref={ref} dataPoints={chartDataPoints} className="fancy-chart">
      {props.children}
    </Chart>
  ));

  const chartRef = React.createRef().current;

  return (
    <React.Fragment>
      {/* <BooksFilter
        selected={filteredYear}
        onChangeFilter={filterChangeHandler}
      />{" "} */}
      <FancyChart ref={chartRef} />
    </React.Fragment>
  );
};

export default BooksChart;
