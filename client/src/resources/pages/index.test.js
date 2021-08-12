import { render, screen, waitFor } from "@testing-library/react";
import HomePage from ".";
import AppLike from "../../AppLike";
import { getCpuUsage, getRamUsage } from "../../services/usage";

jest.mock("../../services/usage", () => ({
  ...jest.requireActual("../../services/usage"),
  getCpuUsage: jest.fn(),
  getRamUsage: jest.fn(),
}));

describe("render charts and calls API", () => {
  const setup = () =>
    render(
      <AppLike>
        <HomePage />
      </AppLike>
    );

  beforeEach(() => {
    getCpuUsage.mockResolvedValue({ used: 10, free: 90 });
    getRamUsage.mockResolvedValue({ used: 10, free: 90 });
  });

  it("renders the CPU and ram usage", async () => {
    setup();

    await waitFor(() => expect(getCpuUsage).toHaveBeenCalledTimes(1));
    expect(await screen.findByText("CPU Usage")).toBeInTheDocument();

    await waitFor(() => expect(getRamUsage).toHaveBeenCalledTimes(1));
    expect(await screen.findByText("RAM Usage")).toBeInTheDocument();
  });
});
