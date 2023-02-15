import Image from "next/image";
import { render } from "react-dom";
import { CakeIcon } from "@heroicons/react/24/solid";
export default function Logo(props: any) {
	const { renderDefault, title } = props;
	return (
		<div className="flex items-center space-x-2">
			<CakeIcon className="rounded-full object-cover" height={50} width={50} />
			<>{renderDefault(props)}</>
		</div>
	);
}
