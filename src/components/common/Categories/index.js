import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import dataHeaderDefault from 'config/sampleData/header';
import Images from 'config/constants/Images';
import { ModelCategories, ModelCategoryButton, IconDown } from './Categories';

const categoryTheme = () => ({
    image: {
        width: '15px',
        height: '15px',
        margin: '0 0 0 5px',
    },
    modelCategoryButton: {
        color: '#fff',
        margin: '0 0 0 10px',
        background: 'transparent',
    },
});
const listCategories = [
    'HOME',
    'VEHICLEMANAGER',
    'AGENTS',
    'ELEMENTS',
    'OS',
    'FEATURE',
    'CONTACTS',
];

const src = {
    IconDownImg: Images.IconDownImg
        ? Images.IconDownImg
        : dataHeaderDefault.IconDownImg,
};

const Categories = () => {
    const [categories] = useState(listCategories);
    return (
        <ThemeProvider theme={categoryTheme}>
            <ModelCategories>
                {categories.map((category) => (
                    <ModelCategoryButton key={category}>
                        {category}
                        <span>
                            <IconDown src={src.IconDownImg} alt="icon-down" />
                        </span>
                    </ModelCategoryButton>
                ))}
            </ModelCategories>
        </ThemeProvider>
    );
};

export default Categories;
