import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import HotelDetail from "./RoomDetail";
import { accommodations } from "../../data/accommodation.json";

const room = accommodations[0];

describe("HotelDetail test", () => {
  beforeEach(() => {
    render(<HotelDetail room={room} />);
  });

  test("should show title all the time", () => {
    expect(screen.getByText(room.name)).toBeDefined();
  });

  test("should show description all the time", () => {
    expect(screen.getByText(room.description)).toBeDefined();
  });
});
