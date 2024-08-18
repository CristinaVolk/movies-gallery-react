export const useMovieCard = (onClickMovieIcon) => {

    function handleIconClick(id) {
        console.log(id)
        onClickMovieIcon(id)
    }

    return {
        handleIconClick
    }
}