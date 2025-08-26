import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-blue-900 text-white py-4">
            <div className="container mx-auto flex justify-between items-center px-4">
                <h1 className="text-xl font-bold">HCLTech</h1>
                <nav>
                    <ul className="flex space-x-6">
                        <li><Link href="/" className="hover:text-gray-300">Home</Link></li>
                        <li><Link href="/blog" className="hover:text-gray-300">Blog</Link></li>
                        <li><Link href="/users" className="hover:text-gray-300">Users</Link></li>
                        <li><Link href="/styleInNext" className="hover:text-gray-300">Styles</Link></li>
                        <li><Link href="/contact" className="hover:text-gray-300">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}