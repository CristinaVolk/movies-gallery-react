import {SwitchMoviesLists} from "../../../features/SwitchMoviesLists/ui/SwitchMoviesLists";

export const MoviesPage = (props) => {
    const {title, isFavouriteTypeList} = props

    return (
        <>
            <h1>{title}</h1>
            <SwitchMoviesLists isFavouriteTypeList={isFavouriteTypeList} />
        </>
    )
}