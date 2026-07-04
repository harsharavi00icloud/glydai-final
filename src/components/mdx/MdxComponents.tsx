import React from 'react'
import ResponseTimeComparison from './ResponseTimeComparison'
import AICategoriesExplorer from './AICategoriesExplorer'
import RealEstateStatsGrid from './RealEstateStatsGrid'
import ToolComparisonTable from './ToolComparisonTable'
import SoftwareStackTable from './SoftwareStackTable'
import StackComparison from './StackComparison'
import GlydFeatureCards from './GlydFeatureCards'


export const Callout = ({ children, emoji = '💡' }: { children: React.ReactNode, emoji?: string }) => {
  return (

    <div className="my-8 flex items-start gap-4 rounded-xl border border-white/10 bg-white/5 p-5 text-white shadow-lg backdrop-blur-sm">
      <div className="text-2xl mt-1">{emoji}</div>
      <div className="leading-relaxed text-white/80">{children}</div>
    </div>
  )
}

// Global mapping for standard HTML tags to our dark theme styles
export const MDXComponentsMap = {
  Callout,
  ResponseTimeComparison,
  AICategoriesExplorer,
  RealEstateStatsGrid,
  ToolComparisonTable,
  GlydFeatureCards,
  SoftwareStackTable,
  StackComparison,

  h1: (props: any) => <h1 className="mt-14 mb-6 text-4xl font-bold tracking-tight text-white font-serif" {...props} />,
  h2: (props: any) => <h2 className="mt-12 mb-4 text-2xl font-semibold tracking-tight text-white/95" {...props} />,
  h3: (props: any) => <h3 className="mt-8 mb-4 text-xl font-medium tracking-tight text-white/90" {...props} />,
  p: (props: any) => <p className="mb-6 font-extralight text-lg text-white/70" {...props} />,
  ul: (props: any) => <ul className="mb-6 ml-6 list-disc text-white/70 space-y-2 text-lg" {...props} />,
  ol: (props: any) => <ol className="mb-6 ml-6 list-decimal text-white/70 space-y-2 text-lg" {...props} />,
  li: (props: any) => <li className="leading-8" {...props} />,
  a: (props: any) => <a className="font-medium text-white hover:text-white/80 underline underline-offset-4 decoration-white/30 hover:decoration-white transition-colors" {...props} />,
  blockquote: (props: any) => <blockquote className="my-8 border-l-2 border-white/30 pl-6 italic text-white/60 text-xl font-serif" {...props} />,
  code: (props: any) => <code className="rounded bg-white/10 px-1.5 py-0.5 font-mono text-[0.9em] text-white/90" {...props} />,
  pre: (props: any) => <pre className="my-8 overflow-x-auto rounded-xl border border-white/10 bg-[#0a0a0a] p-4 text-sm" {...props} />,
  hr: () => <hr className="my-10 border-white/10" />
}
