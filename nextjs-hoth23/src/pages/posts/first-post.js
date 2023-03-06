import Link from "next/link";
import RecComp from "../comp/rec_comp.tsx"

export default function FirstPost() {
    return <h1>First Post
        <Link href="/">go back to home</Link>
        <RecComp title = "Getty Museum" image_url = "https://cpng.pikpng.com/pngl/s/320-3200375_nyan-cat-nyan-cat-pixel-art-png-clipart.png" hours = "Monday 1pm - 4pm" location="ucla" price_range={1}></RecComp>
    </h1>;
}