import { expect } from "vitest";

import RoomBooking from "./RoomBooking";
import { render } from "@testing-library/react";
import { Room } from "../../types/accommodation.types";

const mockBed = {
  price: {
    value: 100, // The actual price value in cents (e.g., $100.00)
    currency_iso_code: "GBP", // Currency code (e.g., USD, EUR, etc.)
  },
} as Room;

describe("RoomBooking Component", () => {
  it("renders the correct price when bed is available", () => {
    const { getByText } = render(<RoomBooking mockBed={mockBed} />);
    const formattedPrice = getByText("£ 1,00");
    const nightCaption = getByText("/night");

    expect(formattedPrice).toBeDefined();
    expect(nightCaption).toBeDefined();
  });

  it('renders "Unavailable" when bed is not available', () => {
    const { getByText } = render(<RoomBooking />);
    const unavailableMessage = getByText("Unavailable");

    expect(unavailableMessage).toBeDefined();
  });
});
