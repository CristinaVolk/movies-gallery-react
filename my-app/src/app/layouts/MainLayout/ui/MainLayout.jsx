import './MainLayout.css'


export const MainLayout = (props) => {
    const {header, content, footer, right, left} = props

    return (
        <>
            <header>{header}</header>
            <main>
                {left && <div className="left">{left}</div>}
                <div className="content">{content}</div>
                {right && <div className="right">{right}</div>}
            </main>
            <footer>{footer}</footer>
        </>
    )
}