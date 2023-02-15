import Link from "next/link";
import { ArrowUturnLeftIcon } from "@heroicons/react/24/solid";

export default function StudioNavbar(props: any) {
	return (
		<div>
			<div className="flex items-center justify-between p-5">
				<Link href="/" className="text-[#E3735E] flex items-center">
					<ArrowUturnLeftIcon className="h-6 w-6 text-[#E3735E] mr-2" />
					Go To Website
				</Link>

				<div className="hidden md:flex p-5 rounded-lg justifty-center border-2 border-[#E3735E]">
					<h1 className="font-bold text-white">
						Want my reviews and recipies sent to your inbox daily? 👉
					</h1>
					<Link
						href="https://www.foodnetwork.com/recipes"
						className="text-[#E3735E] font-bold ml-2"
					>
						www.foodnetwork.com/recipes
					</Link>
				</div>
			</div>
			<>{props.renderDefault(props)}</>
		</div>
	);
}
