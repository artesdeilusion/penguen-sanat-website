import Link from "next/link";

function Footer() {
    return (
        <div>
            <footer className="footer   text-gray-900 p-10">
                <nav>
                    <h6 className="footer-title">Kurslar</h6>
                    <Link href="/courses/music" className="link link-hover">Müzik</Link>
                    <Link href="/courses/chess" className="link link-hover">Satranç</Link>
                    <Link href="/courses/paint" className="link link-hover">Resim</Link>
                    <Link href="/courses/drama" className="link link-hover">Tiyatro & Drama</Link>
                    <Link href="/courses/robotics" className="link link-hover">Robotik Kodlama</Link>

                </nav>
                <nav>
                    <h6 className="footer-title">Şirket</h6>
                    <Link href="/about" className="link link-hover">Hakkında</Link>
                    <Link href="/highlights" className="link link-hover">Öne Çıkanlar</Link>
                    <Link href="/market" className="link link-hover">Mağaza</Link>

                </nav>
                <nav>
                    <h6 className="footer-title">İletişim</h6>
                    <a href="tel:+905348418664" className="link link-hover">+90 534 841 86 64</a>
                    <a href="mailto:info@penguensanat.com" target="_blank" className="link link-hover">info@penguensanat.com</a>
                    <a href="https://maps.app.goo.gl/aBevPFgDU9V2V7Wz7" target="_blank" className="link link-hover"> Bayındır, Meltem, 333. Sk. No:5, 07000 Muratpaşa/Antalya</a>

                </nav>
                <nav>
                    <h6 className="footer-title">Sosyal Medya</h6>
                    <a href="https://api.whatsapp.com/send/?phone=905348418664&text&type=phone_number&app_absent=0" target="_blank" className="link link-hover">WhatsApp</a>
                    <a href="https://www.instagram.com/penguensanatmerkezi/" target="_blank" className="link link-hover">Instagram</a>
                    <a href="https://www.youtube.com/@penguensanat" target="_blank" className="link link-hover">YouTube</a>
                    <a href="https://linktr.ee/penguensanat" target="_blank" className="link link-hover">Linktree</a>

                </nav>
            </footer>
            <footer className="footer border border-t px-10 py-4">
                <aside className="flex items-center justify-between w-full">
                    <img src="/penguensanateskilogo.png" alt="Penguen Sanat Logo" className="h-10 w-auto pr-4" />
                    <a href="https://www.artesdeilusion.com/" target="_blank" className="w-8 h-8 bg-black  hover:animate-spin"></a> {/* Black square at the end */}
                </aside>
            </footer>



        </div>
    )
}
export default Footer;