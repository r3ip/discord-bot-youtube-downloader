import fetch from 'node-fetch';
import * as dotenv from 'dotenv'

dotenv.config();

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': process.env.API_KEY,
    'X-RapidAPI-Host': process.env.API_HOST
  }
};

// const getByVideoId = async (videoId) => {
//   const url = `https://t-one-youtube-converter.p.rapidapi.com/api/v1/infoVideo?id_video=${videoId}`;
//   const response = await fetch(url, options);
//     const data = await response.json();
//     console.log(data)
//     const urlDownloadObj = {
//       message: data.message,
//       response: {
//         title: data.titolo,
//         videoId: data.id,
//         urlDownloadMp3: data.urlMp3,
//         urlDownloadVideo: data.urlVideo
//       }
//     };

//     return urlDownloadObj;
// }

const createByVideoId = async (videoId) => {
  try {
    const url = `https://t-one-youtube-converter.p.rapidapi.com/api/v1/createProcess?url=${videoId}&format=mp3`;

    const response = await fetch(url, options);
    const data = await response.json();

    const urlDownloadObj = {
      message: data.message,
      response: {
        title: data.YoutubeAPI.titolo,
        urlDownloadMp3: data.file
      }
    };

    return urlDownloadObj;
  } catch (error) {
    console.log(error)
  }
}

export { createByVideoId }