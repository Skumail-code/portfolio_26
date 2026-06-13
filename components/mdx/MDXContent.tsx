import { MDXRemote } from "next-mdx-remote/rsc";
import { mdxComponents } from "./MDXComponents";

type MDXContentProps = {
  source: string;
};

export function MDXContent({ source }: MDXContentProps) {
  return <MDXRemote source={source} components={mdxComponents} />;
}
