import { PillarPage, pillarMetadata } from "@/components/pillar/pillar-route";

export const metadata = pillarMetadata("open-house-scheduler");

export default function Page() {
  return <PillarPage slug="open-house-scheduler" />;
}
