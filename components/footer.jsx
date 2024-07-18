import Link from "next/link";

export default function footer(){
    return(
        <footer className="footer footer-center bg-base-300 text-base-content p-4">
            <aside>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by <Link href="/" className="footer-brand">Devcci</Link>  Ltd</p>
            </aside>
        </footer>
    )
}

