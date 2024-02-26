import UpdateBlog from "@/components/UpdateBlog/UpdateBlog";

const Page = (params) => {

    
    return ( <UpdateBlog params={params.params.update} /> );
}
 
export default Page;


export function generateMetadata ({params}) {
    return {
        title: "Update Blog | Pirate Blogs"
    };
  }