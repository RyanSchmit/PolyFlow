import React, { useRef, useEffect, useState } from "react";
import "./Table.css";

const Table = () => {
  return (
    <div>
      <div className="table">
        <table>
          <tr>
            <th>FRESHMAN</th>
            <th>SOPHOMORE</th>
            <th>JUNIOR</th>
            <th>SENIOR</th>
          </tr>

          <tr>
            <td>
              <td className="term">Fall</td>
              <td className="term">Winter</td>
              <td className="term">Spring</td>
            </td>
            <td>
              <td className="term">Fall</td>
              <td className="term">Winter</td>
              <td className="term">Spring</td>
            </td>
            <td>
              <td className="term">Fall</td>
              <td className="term">Winter</td>
              <td className="term">Spring</td>
            </td>
          </tr>

          <tr>
            <td>CPE/CSC 123</td>
            <td>CSC/CPE 101</td>
            <td>CSC/CPE 202 </td>
            <td>CSC/CPE 203</td>
          </tr>

          <tr>
            <td>CPE/CSC 123 </td>
            <td>CSC/CPE 101</td>
            <td>CSC/CPE 202 </td>
            <td>CSC/CPE 203</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default Table;
