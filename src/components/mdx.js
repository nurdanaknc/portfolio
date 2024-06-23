import { MDXRemote } from 'next-mdx-remote'
import Navbar from './navbar';
import React from 'react';
import 'prismjs/themes/prism-okaidia.css';
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
  Callout: (props) => <div className="bg-blue-100 text-blue-900 p-4 rounded-md mb-2" {...props} />,
  ConsCard: (props) => (
    <div className=" bg-rose-200 text-red-950 p-4 rounded-md mb-2" {...props}>
      {props.cons.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  ),
};


export default function Mdx( { source}) {
    return(
     
      <article className="prose max-w-none dark:prose-invert dark:text-white dark:prose-headings:text-white">  
      <MDXRemote {...source} components={{ ...components, ...(source.components || {}) }} />
    </article>

    )

}