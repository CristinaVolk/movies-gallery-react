import classes from './MainLayout.module.css'

export const MainLayout = (props) => {
    const {header, footer, left, content, right} = props
    return (
        <>
            <header>{header}</header>
            <main>
                {left && <div>{left}</div>}

                 <div className={classes.content}>{content}</div>

                {right && <div>{right}</div>}
            </main>
            <footer>{footer}</footer>
        </>
    )
}