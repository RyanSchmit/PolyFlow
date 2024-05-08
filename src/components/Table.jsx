import "./Table.css";

const Table = () => {
  return (
    <div className="table">
      <table>
        <tr>
          <th>FRESHMAN</th>
          <th>SOPHOMORE</th>
          <th>JUNIOR</th>
          <th>SENIOR</th>
        </tr>

        <tr>
          <td>CPE/CSC 123 </td>
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
  );
};

export default Table;
