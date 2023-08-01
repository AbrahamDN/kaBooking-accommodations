import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import HotelDetail from "./RoomDetail";
import { accommodations } from "../../data/accommodation.json";

const hotel = accommodations[0];

describe("HotelDetail test", () => {
  beforeEach(() => {
    render(<HotelDetail hotel={hotel} />);
  });

  test("should show title all the time", () => {
    expect(screen.getByText(hotel.name)).toBeDefined();
  });

  test("should show description all the time", () => {
    expect(screen.getByText(hotel.description)).toBeDefined();
  });
});
