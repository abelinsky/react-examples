import Link from "next/link";
import { Fragment } from "react";

const NewsPage = () => {
  return (
    <Fragment>
      <ul>
        <li>
          <Link href="/news/next-js">Article 1</Link>
        </li>
        <li>Article 2</li>
      </ul>
    </Fragment>
  );
};

export default NewsPage;
