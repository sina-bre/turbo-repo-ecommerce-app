import { getPackages } from "@manypkg/get-packages";

const { packages } = await getPackages(process.cwd());
const scopes = packages.map((pkg) =>
  pkg.packageJson.name.replace("@repo/", "")
);

export default {
  extends: ["@commitlint/config-conventional"],
  rules: {
    "scope-enum": [2, "always", scopes],
  },
};
