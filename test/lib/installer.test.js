const io = require("@actions/io")
const process = require("process")
const path = require("path")
const existsSync = require("fs").existsSync


process.env["RUNNER_TOOL_CACHE"] = path.join(__dirname, "runner", "tools");
process.env["RUNNER_TEMP"] = path.join(__dirname, "runner", "temp");

const installNodenv = require("../../installer").installNodenv

describe("installer tests", () => {
  beforeAll(async () => {
    await io.rmRF(process.env["RUNNER_TOOL_CACHE"]);
    await io.rmRF(process.env["RUNNER_TEMP"]);
  }, 100000);

  it("Acquires version of BATS if no matching version is installed", async () => {
    let batsDir = await ensureBatsAvailable("1.0.0");

    expect(existsSync(`${batsDir}.complete`)).toBe(true);
    expect(existsSync(path.join(batsDir, "bin", "bats"))).toBe(true);
  }, 100000);

  it("Throws if no matching version of BATS can be found", async () => {
    let thrown = false;
    try {
      await ensureBatsAvailable("0.0.0");
    } catch {
      thrown = true;
    }
    expect(thrown).toBe(true);
  }, 100000);
});
