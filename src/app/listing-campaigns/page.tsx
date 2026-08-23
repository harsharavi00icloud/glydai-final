import { PillarPage, pillarMetadata } from "@/components/pillar/pillar-route";

export const metadata = pillarMetadata("listing-campaigns");

export default function Page() {
  return <PillarPage slug="listing-campaigns" />;
}
