import React from 'react';
import axios from 'axios';
import styled from '@emotion/styled';
import * as colors from '../styles/colors';

const TableStyled = styled.table`
  font-size: .85em;
  width: 100%;
  border-spacing: 0;
  tr {
    display: flex;
    padding: 10px 0;
    border-bottom: 1px solid ${colors.red};
    @media only screen and (max-width:600px) {
      flex-direction: column;
    }
    td {
      margin-right: 10px;
      flex: 1;
    }
  }
`;

class Signatures extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numberOfRows: null,
      rows: [],
      error: null,
    };
  }

  componentDidMount() {
    axios.get(process.env.REACT_APP_SHEETS_ENDPOINT)
      .catch((x) => this.setState({ error: `Error connecting to google sheets. Please disable adblock or try another browser. ${x && x.message}` }))
      .then((x) => x && x.data && x.data.feed && x.data.feed.entry)
      .then((cells) => {
        if (!cells) this.setState({ error: 'Error connecting to google sheets. Please disable adblock or try another browser.' });
        const rowsWithHeader = cells.reduce((acc, cell) => {
          const row = Number(cell.gs$cell.row);
          const column = Number(cell.gs$cell.col);
          if (column !== 1) { // filter out timestamp
            acc[row - 1] = [...(acc[row - 1] || []), cell.content.$t];
          }
          return acc;
        }, []);
        const rows = rowsWithHeader
          .slice(1) // filter out headers
          .sort((a, b) => a > b); // alphabetize
        this.setState({ rows, numberOfRows: rows.length, error: null });
      });
  }

  render() {
    const { numberOfRows, rows, error } = this.state;
    return (
      <div>
        <div>
          Number of Signatures:
          {' '}
          {numberOfRows}
        </div>
        <p>{error}</p>
        <TableStyled>
          {rows && rows.map((columns) => (
            <tr>
              {columns && columns.map((value) => <td>{value}</td>)}
            </tr>
          ))}
        </TableStyled>
      </div>
    );
  }
}

export default Signatures;
