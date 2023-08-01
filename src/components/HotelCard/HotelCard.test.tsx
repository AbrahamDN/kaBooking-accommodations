import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { accommodations } from "../../data/accommodation.json";
import HotelCard from "./HotelCard";

const room = accommodations[0];

describe("HotelCard test", () => {
  beforeEach(() => {
    render(<HotelCard room={room} />);
  });

  test("should show title all the time", () => {
    expect(screen.getByText(room.name)).toBeDefined();
  });

  test("should show description all the time", () => {
    expect(screen.getByText(room.description)).toBeDefined();
  });
});
