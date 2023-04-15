import axios from 'axios';
const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});
//lúc khởi tạo Webpack, Node tự động tạo biến env và thêm các biến trog file .env.development
// console.log(process.env);
export const get = async (path, options = {}) => {
    const response = await httpRequest.get(path, options);
    return response.data;
};
export default httpRequest;
