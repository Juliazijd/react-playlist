import React from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BsMusicNoteList } from 'react-icons/bs';
import { HiOutlineInformationCircle } from 'react-icons/hi';
import { IoMdContact } from 'react-icons/io';

export const SideBarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiFillHome />,
        className: 'nav-text',
    },
    {
        title: 'Playlist',
        path: '/playlist',
        icon: <BsMusicNoteList />,
        className: 'nav-text',
    },
    {
        title: 'About',
        path: '/about',
        icon: <HiOutlineInformationCircle />,
        className: 'nav-text',
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <IoMdContact />,
        className: 'nav-text',
    }
]