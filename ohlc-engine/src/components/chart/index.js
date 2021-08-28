import React from "react";
// import { render } from "react-dom";
import Chart from "./Chart";
// import { getData } from "./utils";

import { TypeChooser } from "react-stockcharts/lib/helper";
const ChartComponent = ({ hashedData }) => {
  return (
    <TypeChooser>
      {/* {console.log(hashedData)} */}
      {(type) => <Chart type={type} data={hashedData} />}
    </TypeChooser>
    // <div>{cnt}</div>
  );
};
// class ChartComponent extends React.Component {
//   componentDidMount() {
//     getData((data) => {
//       console.log(data);
//       this.setState({ data });
//     });
//   }
//   render() {
//     if (this.state == null) {
//       return <div>Loading...</div>;
//     }
//     return (
//       <TypeChooser>
//         {(type) => <Chart type={type} data={this.state.data} />}
//       </TypeChooser>
//     );
//   }
// }
export default ChartComponent;
// render(<ChartComponent />, document.getElementById("root"));
