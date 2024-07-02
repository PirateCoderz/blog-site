import AddBlogs from "@/components/Forms/AddBlogs/AddBlog";

const Page = () => {
    return (
        <AddBlogs />
     );
}

export default Page;

export function generateMetadata ({params}) {
    return {
        title: "Create Blogs | WH Tribute"
    }
}