"use client";

import { useRef, useState } from "react";
import { useRouter } from 'next/navigation';
import axios from "axios";

import ImageKit from "imagekit";

import style from './users.module.css';
import formstyle from './forms.module.css';
import Image from "next/image";
import dynamic from "next/dynamic";

const JoditComponent = dynamic(() => import("@/Components/Jodit/Jodit"), { ssr: false });

const imageKit = new ImageKit({
  publicKey: process.env.publicKey,
  privateKey: process.env.privateKey,
  urlEndpoint: process.env.urlEndPoint,
});

const BlogForm = () => {

  const [imagestoshow, setImagestoshow] = useState([]);
  const [imagesstored, setImagesstored] = useState([]);
  const [Joditcontent, setJoditContent] = useState('');
  const [data, setData] = useState({
    heading: '',
  });
  
  let blogId = null;
  const fileInputRef = useRef(null);

  const router = useRouter();

  const updateBlogImages = async (Cloudimages) => {
    const imagedata = Cloudimages[0];
    const featureImg = imagedata.img_url;
    await axios.put('http://localhost:3000/api/blogs/' + blogId, { featureImg, imagedata }).then((res) => {
      // console.log("Image data is stored in mongo");
      alert("Blog is Uploaded Successfully");

      router.replace('/blogs')
    }).catch((err) => {
      console.log("error while storing image data in mongo");
      console.log(err.message);
    });
  }

  const imageStoreHandler = async () => {
    // console.log("Images Store Handler is Running");
    let Cloudimages = [];

    for (const obj of imagestoshow) {
      const file = obj.url;
      const imgname = obj.filename;
      const response = await imageKit.upload({
        file,
        fileName: imgname,
      });
      if (response) {
        if (response.fileId) {
          // console.log("Cloud Images are Storing" + Cloudimages);
          Cloudimages = [{
            img_id: response.fileId,
            img_url: response.url,
          }];
          // console.log(Cloudimages);
        }
        await updateBlogImages(Cloudimages);
      }
      if (!response) {
        console.log("error in uploding imgs");
        continue;
      }
    }
    if (Cloudimages.length > 0) {
      setImagesstored(prev => [Cloudimages[0]]);
    }

  }

  const submitHandler = async (e) => {
    e.preventDefault();

    if (data.heading == "" || Joditcontent == "") {

      if(data.heading == "") alert("Heading is not here");
      alert("Some Data Fields are Empty. Fill All of them...");
      return;
    }

    const heading = data.heading,
      content = Joditcontent,
      featureImg = imagesstored[0];

    // console.log("Heading " + heading);
    // console.log("Joditcontent ");
    // console.log(content);
    // console.log(featureImg);

    await axios.post("http://localhost:3000/api/blogs", { heading, content })
      .then((response) => {
        // console.log(response);
        console.log("Blog Data is Sent Successfully to Route");
        // console.log(response.data.result._id)
        blogId = response.data.result._id;
        imageStoreHandler();
      }).catch((err) => {

        console.log("Error while sending data to api");
        console.log(err.message);
      });
  }

  const clearHandler = () => {
    setData({ heading: '' })
    setJoditContent('');
    setImagesstored([]);
    setImagestoshow([]);
  }

  const changeData = (inputField, newVal) => {
    setData((preevData) => {
      return {
        ...preevData,
        [inputField]: newVal
      }
    })
  }

  const ImagePickedHandler = async (e) => {
    const files = e.target.files;
    if (files.length > 20 || imagestoshow.length >= 20) {
      alert('Maximum 20 images are allowed')

      return;
    }

    try {
      const promises = [];

      // Loop through the selected files
      for (let i = 0; i < files.length; i++) {
        const file = files[i];

        // Check if the size of the current image exceeds the limit (4MB)
        if (file.size > 6 * 1024 * 1024) {
          alert('Image size should not exceed 6MB.')
          continue;
        }

        // Read the selected image and convert it to a Data URL
        const reader = new FileReader();
        // console.log(reader)

        const promise = new Promise((resolve) => {
          reader.onload = (e) => {
            setImagestoshow((prevSelectedImages) => [
              ...prevSelectedImages,
              { url: e.target.result, filename: file.name },
            ]);
            resolve();
          };
        });

        reader.readAsDataURL(file);
        promises.push(promise);
      }

      await Promise.all(promises); // Wait for all file reading operations to complete

      console.log(promises);
    } catch (error) {
      // Handle any potential errors
      console.error("Error reading images:", error);

    } finally {
      // setLoading(false); // Set the loading state to false after all images are processed
      // console.log("Images are uploaded");
    }

    // Clear the file input after image selection
    fileInputRef.current.value = null;
  };

  return (
    <div className={style.main}>
      <h1 className={style.heading1}>Create New Blog</h1>

      <div className={formstyle.forms}>
        <form onSubmit={submitHandler} className={formstyle.newForm}>
          <input type='text' placeholder='Main Heading' onChange={(e) => changeData('heading', e.target.value)} value={data.firstName} />

          <label htmlFor="imgInput">Upload Featured Image</label>
          <input ref={fileInputRef} type="file" name="imgInput" onChange={ImagePickedHandler} id="imageInput" style={{ display: 'inline', width: 'auto', marginLeft: 20 }} />
          {imagestoshow.length > 0 ? <>
            <Image src={imagestoshow[0].url} priority={false} width={100} height={80} alt={imagestoshow[0].filename} />
          </> : null}

          <JoditComponent Joditcontent={Joditcontent} setJoditContent={setJoditContent} />

          <div className={formstyle.submitDiv}>
            <button className={formstyle.submit}>Add Blog</button>
            <input type='reset' className={formstyle.submit} onClick={clearHandler} value="Clear Data" />
          </div>
        </form>
        {/* {Joditcontent} */}
      </div>
    </div>
  );
}

export default BlogForm;