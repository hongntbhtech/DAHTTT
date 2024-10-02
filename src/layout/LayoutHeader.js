import Header from "../components/Header";

function LayoutHeader({children}){
    return(
        <>
        <Header/>
        {children}
        </>
    )
}

export default LayoutHeader;