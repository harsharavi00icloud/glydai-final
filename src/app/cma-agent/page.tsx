import { PillarPage, pillarMetadata } from "@/components/pillar/pillar-route";

export const metadata = pillarMetadata("cma-agent");

export default function Page() {
  return <PillarPage slug="cma-agent" />;
}
