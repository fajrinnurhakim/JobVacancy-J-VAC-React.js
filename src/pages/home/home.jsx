import FindJob from "./section/findJob";
import Companies from "./section/companies";
import PostJob from "./section/postJob";
import Categories from "./section/categories";
import Job from "./section/job";

export default function Home() {
    return (
        <>
            <div className="bg-lime-50">
                <FindJob />
                <Companies />
                <PostJob />
                <Categories />
                <Job />
            </div>
        </>
    );
}
