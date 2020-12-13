import React from 'react';

    function SectionItemList (title, children) {
        return<section className='seccionItemList'>
            <h1 className='titulosItemList'>{title}</h1>
            <article className='articleItem'>
                {children}
            </article>
        </section>
    }

export default SectionItemList;