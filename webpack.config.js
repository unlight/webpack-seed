const ts = require("typescript");
eval(ts.transpile(require("fs").readFileSync("./config/webpack.config.ts", "utf8")));