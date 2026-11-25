import { BlogList } from "@blugin/next";

export default function BlogPage({ searchParams }) {
  return <BlogList searchParams={searchParams} />;
}