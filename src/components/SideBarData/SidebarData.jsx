import React from 'react'
import {MdFormatListBulleted} from 'react-icons/md'
import {BsFillPersonLinesFill} from 'react-icons/bs'

export const SidebarData = [
    {
        title: 'Foro',
        path: '/forum',
        icon: <MdFormatListBulleted />,
        cName: 'nav-text'
    },
    {
        title: 'Mis Preguntas',
        path: '/myQuestions',
        icon: <BsFillPersonLinesFill />,
        cName: 'nav-text'
    },
];
