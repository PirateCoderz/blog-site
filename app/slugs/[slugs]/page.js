import axios from "axios";

const Page = async (n) => {

    const slugs = n.params.slugs;

    console.log(slugs)
    

    await axios.get('localhost:3000/api/slugs/' + slugs);
    
    
    return ( 
        <div>Slug</div>
     );
}
 
export default Page;