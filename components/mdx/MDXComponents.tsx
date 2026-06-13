import type { MDXComponents } from "mdx/types";

export const mdxComponents: MDXComponents = {
  h1: (props) => (
    <h1 className="mb-6 text-3xl font-medium tracking-tight" {...props} />
  ),
  h2: (props) => (
    <h2 className="mb-4 mt-10 text-2xl font-medium tracking-tight" {...props} />
  ),
  h3: (props) => (
    <h3 className="mb-3 mt-8 text-xl font-medium tracking-tight" {...props} />
  ),
  p: (props) => <p className="mb-4 leading-relaxed text-muted" {...props} />,
  a: (props) => (
    <a
      className="text-foreground underline decoration-white/30 underline-offset-4 transition-colors hover:decoration-foreground"
      {...props}
    />
  ),
  ul: (props) => (
    <ul className="mb-4 list-disc space-y-2 pl-6 text-muted" {...props} />
  ),
  ol: (props) => (
    <ol className="mb-4 list-decimal space-y-2 pl-6 text-muted" {...props} />
  ),
  li: (props) => <li className="leading-relaxed" {...props} />,
  code: (props) => (
    <code
      className="rounded border border-border bg-surface-elevated px-1.5 py-0.5 font-mono text-sm"
      {...props}
    />
  ),
  pre: (props) => (
    <pre
      className="mb-6 overflow-x-auto rounded-lg border border-border bg-surface p-4 font-mono text-sm"
      {...props}
    />
  ),
  blockquote: (props) => (
    <blockquote
      className="mb-4 border-l-2 border-border-hover pl-4 italic text-muted-foreground"
      {...props}
    />
  ),
  strong: (props) => (
    <strong className="font-medium text-foreground" {...props} />
  ),
};
