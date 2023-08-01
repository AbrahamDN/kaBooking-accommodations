import { describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { accommodations } from "../../data/accommodation.json";
import Card from "./Card";

const room = accommodations[0];

describe("Card test", () => {
  beforeEach(() => {
    render(<Card room={room} />);
  });

  test("should show title all the time", () => {
    expect(screen.getByText(room.name)).toBeDefined();
  });

  test("should show description all the time", () => {
    expect(screen.getByText(room.description)).toBeDefined();
  });
});
