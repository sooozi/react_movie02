export const getMovie = async () => {
    try {
        const response = await fetch(
            `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`,
        );
        const json = await response.json();
        return json.datal;
    } catch (error) {
        console.error('영화 데이터 가져오는 중 오류 발생:', error);
    }
};