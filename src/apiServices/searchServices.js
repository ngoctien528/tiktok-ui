import * as request from '~/utils/request';

export const search = async (query) => {
    try {
        const res = await request.get('Users', {
            params: {
                search: query,
            },
        });
        return res;
        // setSearchResult(res);
        // setLoading(false);
    } catch (error) {
        console.log(error);
        // setLoading(false);
    }
    // .then((res) => {
    //     // console.log(res);
    //     setSearchResult(res);
    //     setLoading(false);
    // })
    // .catch(() => {
    //     setLoading(false);
    // });
};
