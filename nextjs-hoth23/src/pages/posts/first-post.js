import Link from "next/link";
import RecComp from "../comp/rec_comp.tsx"

export default function FirstPost() {
    return <h1>First Post
        <Link href="/">go back to home</Link>
        <RecComp title = "abc" image_url = "111" hours = "1pm" location="ucla" price_range={1}></RecComp>
    </h1>;
}