export default function Footer() {
    return (
        <footer className="bg-blue-900 text-white py-4 text-center">
            <p className="text-sm">
                © {new Date().getFullYear()} Rajasekar. All rights reserved.
            </p>
        </footer>
    );
}