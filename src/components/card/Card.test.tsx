import { describe, expect } from "vitest";
import { render } from "@testing-library/react";
import Card from "./Card";
import { Accommodation } from "../../types/accommodation.types.ts";

const mockRoom = {
  name: "Sample Room",
  description: "Sample description",
  images: [{ filename: "sample.jpg", alt: "Sample Image" }],
  type: { name: "Sample Type" },
  facilities: [
    { id: 1, label: "Facility 1" },
    { id: 2, label: "Facility 2" },
    { id: 3, label: "Facility 3" },
  ],
} as Accommodation;

describe("Card Component", () => {
  it("renders correctly with provided props", () => {
    const { getByText, getByAltText, getAllByRole } = render(
      <Card room={mockRoom} />
    );

    // Check if the elements with specific text content are present
    expect(getByText("Sample Room")).toBeDefined();
    expect(getByText("Sample description")).toBeDefined();
    expect(getByText("Sample Type")).toBeDefined();
    expect(getByText("Facility 1")).toBeDefined();
    expect(getByText("Facility 2")).toBeDefined();
    expect(getByText("Facility 3")).toBeDefined();

    // Check if the image with specific alt text is present
    expect(getByAltText("Sample Image")).toBeDefined();

    // Check if there are exactly 3 list items for facilities
    const facilityItems = getAllByRole("listitem");
    expect(facilityItems).toHaveLength(3);
  });

  // Add more test cases if needed to cover different scenarios
});
