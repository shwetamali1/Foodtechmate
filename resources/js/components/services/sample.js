import axiosInstance from ".";

export const getControllerTest = async () => {
    try {
        const response = await axiosInstance.get('/client/testcall');
        return response;
    } catch (error) {
        console.log("err", error);
    }
}
