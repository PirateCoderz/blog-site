import AddBlogs from "@/components/AddBlogs/AddBlog";

const Page = () => {
    return ( 
        <AddBlogs />
     );
}
 
export default Page;

export function generateMetadata ({params}) {
    return {
        title: "Create Blogs | Pirate Blogs"
    }
}