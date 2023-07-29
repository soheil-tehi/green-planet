import BlogBox from '../../Components/BlogBox/blogBox';
import useScrollToTop from '../../Components/useScrollToTop';
import './blogs.scss';

function Blogs() {
    
    useScrollToTop();

    return (
        <div className="blogs-container">
            <BlogBox />
            <BlogBox />
            <BlogBox />
            <BlogBox />
            <BlogBox />
            <BlogBox />
            <BlogBox />
            <BlogBox />
            <BlogBox />
            <BlogBox />
            <BlogBox />
            <BlogBox />
            <BlogBox />
        </div>
    )
}

export default Blogs