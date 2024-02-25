"use client";

import style from './page.module.css';
import formstyle from './forms.module.css';

import Image from "next/image";
import dynamic from "next/dynamic";

import axios from "axios";
import ImageKit from "imagekit";

import { useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/navigation';

const imageKit = new ImageKit({
    publicKey: process.env.publicKey,
    privateKey: process.env.privateKey,
    urlEndpoint: process.env.urlEndPoint,
});

const JoditComponent = dynamic(() => import("@/Components/Jodit/Jodit"), { ssr: false });

const UpdateBlog = ({ params }) => {

    const route = useRouter();
    const id = params;
    let updateData;

    const [heading, setHeading] = useState();
    const [images, setImages] = useState([]);
    const [Joditcontent, setJoditContent] = useState('');
    const fileInputRef = useRef(null)

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        await axios.get("http://localhost:3000/api/blogs/" + id).then((response) => {
            updateData = response.data.result;
            setHeading(updateData.heading);
            setJoditContent(updateData.content);
            setImages(updateData.featureImg)
            // console.log(updateData)
        }).catch((err) => {
            console.log(err);
        });
    };

    const ImagePickedHandler = async (e) => {
        const files = e.target.files;
        if (files.length > 20 || imagestoshow.length >= 20) {
            alert('Maximum 20 images are allowed');
            return;
        }

        try {
            const promises = [];

            // Loop through the selected files
            for (let i = 0; i < files.length; i++) {
                const file = files[i];

                // Check if the size of the current image exceeds the limit (4MB)
                if (file.size > 6 * 1024 * 1024) {
                    alert('Image size should not exceed 6MB.');
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
        } catch (error) {
            // Handle any potential errors
            console.error("Error reading images:", error);
        } finally {
            // setLoading(false); // Set the loading state to false after all images are processed
            // console.log("Images are uploaded")
        }

        // Clear the file input after image selection
        fileInputRef.current.value = null;
    };

    const imageStoreHandler = async () => {
        // console.log("Images Store Handler is Running");
        let Cloudimages = []

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
            }
            if (!response) {
                console.log("error in uploding imgs");
                continue;
            }
        }
        if (Cloudimages.length > 0) {
            setImagesstored(prev => [Cloudimages[0]]);
        }
    };

    const submitHandler = async (e) => {
        e.preventDefault();

        if (heading == "" || Joditcontent == "") {
            alert("Some Data Fields are Empty. Fill All of them...");
            return
        }

        // const heading = data.heading,
        const content = Joditcontent;
        const image = images;

        await axios.put("/api/blogs/" + id, { heading, content, image }).then((response) => {
            // console.log(response);
            // console.log("Blog Data is Sent Successfully to Route");
            // imageStoreHandler();
            alert("Blog is Uploaded Successfully");
            route.replace('/blogs/' + id);
        }).catch((err) => {
            console.log(err.message);
        });

    };

    const clearHandler = () => {
        setData({ heading: '' })
        setJoditContent('');
        setImagesstored([]);
        setImagestoshow([]);
    };

    const changeData = (inputField, newVal) => {
        setData((preevData) => {
            return {
                ...preevData,
                [inputField]: newVal
            }
        })
    };

    return (
        <div className={style.main} >
            <h1 className={style.heading1}>Update Blog</h1>

            <div className={formstyle.forms}>
                <form className={formstyle.newForm} onSubmit={submitHandler}>
                    <input type='text' placeholder='Main Heading' onChange={(e) => setHeading(e.target.value)} value={heading} />

                    <label htmlFor="imgInput">Upload Featured Image</label>

                    <input type="file" name="imgInput" id="imageInput" onChange={ImagePickedHandler} style={{ display: 'inline', width: 'auto', marginLeft: 20 }} />
                    {images.length > 0 ? <>
                        <Image src={images} priority={false} width={100} height={80} alt={heading} />
                    </> : null}

                    <JoditComponent Joditcontent={Joditcontent} setJoditContent={setJoditContent} />

                    <div className={formstyle.submitDiv}>
                        <button className={formstyle.submit}>Update Blog</button>
                        <input type='reset' className={formstyle.submit} onClick={clearHandler} value="Clear Data" />
                    </div>
                </form>
                {/* {Joditcontent} */}
            </div>
        </div>
    );
}

export default UpdateBlog;