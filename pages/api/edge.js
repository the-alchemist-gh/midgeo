import { getContext } from "../../context";

export default function handler(req) {
  return new Response(
            JSON.stringify({ 
                mycountry: getContext(req, "mycountry") 
            })
        );
}

export const config = {
  runtime: "experimental-edge",
};