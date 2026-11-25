import { BlogDetail, getBlogMetadata } from "@blugin/next";

export async function generateMetadata({ params }) {
  const { slug } = await params;
  return getBlogMetadata(slug);
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  return <BlogDetail slug={slug} />;
}