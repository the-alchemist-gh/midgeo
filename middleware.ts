import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { withContext } from "./context";

// Pre-define the possible context keys to prevent spoofing
const allowedContextKeys = ["mycountry"];

export default withContext(allowedContextKeys, (setContext, req: NextRequest) => {
  const myCountry = req.geo?.country
  setContext("mycountry", `${myCountry}`);
  return NextResponse.next();
});