import { expect, test } from "vitest";
// import { render, screen } from "@testing-library/react";
import renderer from "react-test-renderer";

import RoomBooking from "./RoomBooking";
import toJson from "../../utils/toJson";

test("Room Booking should show", () => {
  const component = renderer.create(<RoomBooking />);

  const tree = toJson(component);
  expect(tree).toMatchSnapshot();
});
