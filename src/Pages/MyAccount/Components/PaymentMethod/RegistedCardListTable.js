import React, { Component } from "react";
import styled from "styled-components";

class RegistedCardListTable extends Component {
  render() {
    const { paymentMethodList, onClickHander } = this.props;
    return (
      <>
        <Table>
          <Thead>
            <tr>
              <MethodNameTable>Method</MethodNameTable>
              <Th colspan="2">Expires</Th>
            </tr>
          </Thead>
          <Tbody>
            {paymentMethodList.map((el, idx) => (
              <tr key={idx}>
                <td>{el.method}</td>
                <td>{el.expire}</td>
                <DeleteButton onClick={() => onClickHander(idx)}>
                  Delete
                </DeleteButton>
              </tr>
            ))}
          </Tbody>
        </Table>
      </>
    );
  }
}

export default RegistedCardListTable;

const Table = styled.td`
  table-spacing: 0;
  font-family: "Comfortaa";
  font-size: 15px;
`;

const Thead = styled.thead`
  color: gray;
  th {
    text-align: start;
    padding-bottom: 10px;
    border-bottom: 1px solid black;
  }
`;

const MethodNameTable = styled.th`
  width: 70rem;
`;
const Th = styled.th`
  width: 20%;
`;

const Tbody = styled.tbody`
  td {
    padding: 10px 0;
  }

  tr:last-child {
    td {
      border-bottom: 1px solid black;
    }
  }
`;

const DeleteButton = styled.td`
  text-decoration: underline;
  text-align: end;
`;
