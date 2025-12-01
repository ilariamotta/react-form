import { blogTitles } from "../data/blogTitles"

export default function BlogPosts() {
    return (
        <>
            {blogTitles.map((post, index) => (
                <li className='card-title' key={index}>
                    {post}
                </li>
            ))}
        </>
    )
}