import axios from 'axios';
import React from 'react';

const multiImgUpload =async (image) => {
    const formData = new FormData();
    formData.append("image", image);
    const {data} = await axios.post(
        `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOSTING_KEY}`,
        formData
      )
      const photo_url  = data.data.display_url
      
      return photo_url ;
};

export default multiImgUpload;