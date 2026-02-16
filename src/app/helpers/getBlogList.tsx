export default async function getBlogList({ category,limit }: { category?: string,limit?:Number }) {
  try {
    const url = category
      ? `http://192.168.110.232:3001/api/getBlogList?category=${category}`
      : `http://192.168.110.232:3001/api/getBlogList`;

    const res = await fetch(url, { cache: "no-store" }); // SSR fetch at runtime

    if (!res.ok) {
      console.error("Failed to fetch blogs:", res.statusText);
      return [];
    }

    const data = await res.json();
    if(data.blogs){
      return data.blogs
    }
    else{
      return []
    }
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return [];
  }
}