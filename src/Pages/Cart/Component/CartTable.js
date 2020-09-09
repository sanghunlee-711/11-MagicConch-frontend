import React, { Component } from "react";
import styled, { css } from "styled-components";

class CartTable extends Component {
  render() {
    const { cartList, handleRemoveBtn, handleSelect, pushBasket } = this.props;
    return (
      <ShopTable>
        <Tablehead>
          <tr>
            <TableTitle>Product</TableTitle>
            <TableFontNone>Name</TableFontNone>
            <th>Price</th>
            <th>Quantity</th>
            <TableTotal>Total (USD)</TableTotal>
            <TableFontNone>Remove</TableFontNone>
          </tr>
        </Tablehead>
        <TableBody>
          {cartList.map((item, idx) => (
            <tr className="cartItem" key={idx}>
              <Thumbnail>
                <img src={item.outer_image_url} />
              </Thumbnail>
              <ProductName>{item.outer_tag}</ProductName>
              <td className="productPrice">
                <spna>$</spna> {Number(item.product_price)}
              </td>
              <ProductQuantity>
                <select
                  name={idx}
                  value={item.quantity}
                  onChange={handleSelect}
                >
                  {OPTION_NUMBER.map((el, index) => {
                    return (
                      <option value={index} key={index}>
                        {el}
                      </option>
                    );
                  })}
                </select>
              </ProductQuantity>
              <TotalText>
                <spna>$</spna>
                {Number(item.product_price) * item.quantity}
              </TotalText>
              <ProductRemove>
                <button onClick={() => handleRemoveBtn(idx)}>
                  <img src="../Images/remove.png" />
                </button>
              </ProductRemove>
            </tr>
          ))}
          <TablePosition>
            <TableRight colspan="6">
              <CouponBox>
                <label>
                  <input type="text" placeholder="Couoin code"></input>
                </label>
                <button>Apply Coupon</button>
                <button onClick={pushBasket}>Update Basket</button>
              </CouponBox>
            </TableRight>
          </TablePosition>
        </TableBody>
      </ShopTable>
    );
  }
}

export default CartTable;

const OPTION_NUMBER = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const ShopTable = styled.table`
  ${(props) => props.theme.setSize("100%", null)}
  position: relative;
  border-spacing: 0;
`;

const Tablehead = styled.thead`
  ${(props) => props.theme.setSize("100%", null)}
  text-align: left;
  font-size: 18px;

  th {
    padding: 10px 5px;
    border-bottom: 2px solid #333;
  }
`;

const TableTitle = styled.th`
  width: 60px;
`;

const TableBody = styled.tbody`
  border-bottom: 1px solid #333;

  td {
    font-size: 18px;
    vertical-align: middle;
  }
`;

const Thumbnail = styled.td`
  text-align: center;
  padding: 10px 0;

  img {
    width: 100px;
    height: 100px;
  }
`;

const ProductName = styled.td`
  padding-left: 16px;
`;

const TableFontNone = styled.th`
  color: #fff;
`;

const TableTotal = styled.th`
  text-align: right;
`;

const TotalText = styled.td`
  text-align: right;
`;

const ProductQuantity = styled.div`
  padding-top: 35px;

  select {
    width: 80px;
    height: 48px;
    padding-left: 6px;
  }
`;

const CouponBox = styled.div`
  width: 270px;
  margin-bottom: 20px;
  padding-top: 35px;

  input {
    width: 100%;
    height: 47px;
    display: block;
    padding: 9px;
    margin-bottom: 20px;
    border: 1px solid #333;
  }

  button {
    width: 100%;
    height: 47px;
    font-size: 15px;
    color: #fff;
    text-align: center;
    background: #4d4d4d;
    margin-bottom: 20px;
  }
`;

const TablePosition = styled.tr`
  position: relative;
`;

const TableRight = styled.td`
  position: absolute;
  right: 0;
`;

const ProductRemove = styled.td`
  text-align: right;

  button {
    img {
      width: 22px;
      height: 22px;
    }
  }
`;
