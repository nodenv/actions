const tools = require("@actions/tool-cache")

const TOOL_NAME = 'nodenv';

module.exports = {
  installNodenv: async function (version) {
    const toolPath = tools.find(TOOL_NAME, version) || downloadNodenv(version);

    // prepend bin directory to PATH for future tasks
    core.addPath(path.join(await toolPath, "bin"));

    return toolPath;
  }
}

async function downloadNodenv(version) {
  const tarballPath = await tools.downloadTool(downloadUrl(version));

  const extractedPath = await tools.extractTar(tarballPath);

  return await tools.cacheDir(extractedPath, TOOL_NAME, version);
}

function downloadUrl(version) {
  `https://github.com/nodenv/nodenv/archive/v${version}.tar.gz`
}
