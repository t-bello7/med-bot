import { describe, test, expect } from 'vitest';
import { screen } from "@testing-library/react";
import Home from "../pages/Home";
import { renderWithRouter } from "../utils/router";

describe ( 'Test for routes', () => {
  test("Check home route", () => {
    renderWithRouter(<Home/>)
    expect(screen.getByText('Welcome')).toBeDefined()
  })
})