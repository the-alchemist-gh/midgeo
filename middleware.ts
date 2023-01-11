import { NextRequest, NextResponse } from "next/server";
import { withContext } from "./context";

// Pre-define the possible context keys to prevent spoofing
const allowedContextKeys = ["mycountry"];

export default withContext(allowedContextKeys, (setContext, req: NextRequest) => {
  const country = req.geo?.country
  console.log(country)
  setContext("mycountry", `${country}`);
  return NextResponse.next();
});
 
