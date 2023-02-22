import Image from "next/image";
import Link from "next/link";
function Header() {
	return (
		<header className="flex items-center justify-between space-x-2 font-bold px-10 py-5">
			<div className="flex items-center space-x-2">
				<Link href="/">
					<Image
						className="rounded-full"
						src="https://i.imgur.com/XsgDdL9.jpg"
						width={50}
						height={50}
						alt="face"
					/>
				</Link>
				<h1>My Blog</h1>
			</div>
			<div>
				<Link
					href="www.foodnetwork.com"
					className="px-5 py-3 text-sm md:text-base bg-gray-900 text-[#E3735E] flex items-center rounded-full text-center hover:bg-[#E3735E] hover:text-gray-900"
				>
					Join our mailing list!
				</Link>
			</div>
		</header>
	);
}

export default Header;
