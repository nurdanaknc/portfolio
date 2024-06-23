import { MDXRemote } from 'next-mdx-remote'
import Navbar from './navbar';
import React from 'react';

import { Link } from "next/link";
import {  LuArrowUpRight } from "react-icons/lu";
import Prism from 'prismjs';

const components = {
  code: (props) => {
    const { className, children } = props;
    const language = className ? className.replace('language-', '') : '';
    const highlightedCode = Prism.highlight(children, Prism.languages[language], language);

    return (
      <code
        className={`language-${language}`}
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      />
    );
  },
  a: (props) => <a {...props} className="text-blue-500 hover:underline" />,
};


export default function Mdx( { source}) {
    return(
      <div className=''>
      <article className="prose max-w-none">  
      <MDXRemote {...source} components={{ ...components, ...(source.components || {}) }} />
    </article>
    </div>
    )

}