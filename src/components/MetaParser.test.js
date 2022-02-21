import React from "react";
import { render, cleanup } from "@testing-library/react";
import userEvent from '@testing-library/user-event'

import MetaParser from "./MetaParser";

afterEach(cleanup);

it("check sample user metadata pasted correctly", () => {
  const { getByTestId } = render(<MetaParser />);

  const text = 
  `"<meta property="a11ycertifiedBy">Dewey, Checkett and Howe</meta><metaproperty="a11ycertifierCredential">Certifiably Accessible</meta>"`

  const element = getByTestId("meta-data-input");
  userEvent.paste(element, text);
  expect(element.toHaveValue(text))

});
