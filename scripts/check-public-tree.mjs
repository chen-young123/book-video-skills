import { readdir } from "node:fs/promises";
import { extname, join, relative } from "node:path";

const root = process.cwd();
const excludedDirectories = new Set([".git", "node_modules"]);
const forbiddenDirectories = new Set(["assets", "episodes", "data", "uploads"]);
const forbiddenExtensions = new Set([
  ".mp3", ".wav", ".m4a", ".mp4", ".mov", ".avi", ".mkv",
  ".png", ".jpg", ".jpeg", ".webp", ".gif", ".bin",
]);
const forbiddenNames = new Set([".env", ".env.local", ".env.production"]);
const violations = [];

async function walk(directory) {
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    if (excludedDirectories.has(entry.name)) continue;

    const fullPath = join(directory, entry.name);
    const pathFromRoot = relative(root, fullPath);
    if (entry.isDirectory()) {
      if (forbiddenDirectories.has(entry.name)) {
        violations.push(`${pathFromRoot}/：不应包含作品或媒体目录`);
        continue;
      }
      await walk(fullPath);
      continue;
    }

    if (forbiddenNames.has(entry.name) || forbiddenExtensions.has(extname(entry.name).toLowerCase())) {
      violations.push(`${pathFromRoot}：不应包含媒体或凭据文件`);
    }
  }
}

await walk(root);
if (violations.length > 0) {
  console.error("公开仓库边界检查失败：");
  for (const violation of violations) console.error(`- ${violation}`);
  process.exit(1);
}

console.log("公开仓库边界检查通过：未发现作品、媒体或常见凭据文件。");

