import fs from "fs";
import path from "path";

function walk(dir) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p);
    else if (/\.(tsx|jsx)$/.test(ent.name)) {
      let c = fs.readFileSync(p, "utf8");
      const n = c
        .replace(/https:\/\/www\.rankraze\.com/g, "https://rankraze.us")
        .replace(/https:\/\/rankraze\.com\//g, "https://rankraze.us/");
      if (n !== c) fs.writeFileSync(p, n);
    }
  }
}

walk("src/app");
