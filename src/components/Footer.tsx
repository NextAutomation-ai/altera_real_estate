export default function Footer() {
    return (
        <footer className="bg-black text-white pt-32 pb-12 px-6">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
                    <div>
                        <h3 className="text-2xl font-bold uppercase tracking-widest mb-8">Altera</h3>
                        <p className="text-white/60 text-sm leading-loose">
                            Your construction and real estate experts<br />
                            for Lörrach and the surrounding area.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-sm uppercase tracking-widest mb-6 border-b border-white/20 pb-4">Contact</h4>
                        <ul className="space-y-4 text-white/60 text-sm">
                            <li>+49 (0) 7623 / 74 11 11</li>
                            <li>info@altera-immobilien.de</li>
                            <li>Hauptstraße 111<br />79650 Schopfheim</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm uppercase tracking-widest mb-6 border-b border-white/20 pb-4">Social</h4>
                        <ul className="space-y-4 text-white/60 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Facebook</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Instagram</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">LinkedIn</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-sm uppercase tracking-widest mb-6 border-b border-white/20 pb-4">Legal</h4>
                        <ul className="space-y-4 text-white/60 text-sm">
                            <li><a href="#" className="hover:text-white transition-colors">Imprint</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-white transition-colors">Terms & Conditions</a></li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between border-t border-white/20 pt-8 text-xs text-white/40 uppercase tracking-wider">
                    <p>© {new Date().getFullYear()} Altera Immobilien. All rights reserved.</p>
                    <p className="mt-4 md:mt-0">Design & Code by Antigravity</p>
                </div>
            </div>
        </footer>
    );
}
