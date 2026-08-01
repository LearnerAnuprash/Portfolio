export default async function BlogsDetails({
  params,
}: {
  params: Promise<{ blogId: string }>;
}) {
  const { blogId } = await params;
  return <h1>Blogs Details Page for {blogId}</h1>;
}
