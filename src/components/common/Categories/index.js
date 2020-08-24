import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Images from 'config/constants/Images';
import { ModelCategories, ModelCategoryButton, IconDown } from './Categories';

const categoryTheme = () => ({
    image: {
        width: '15px',
        height: '15px',
        margin: '0 0 0 5px',
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

const Categories = () => {
    const [categories] = useState(listCategories);
    return (
        <ModelCategories theme={categoryTheme}>
            {categories.map((category) => (
                <ModelCategoryButton type="button">
                    {category}
                    <span>
                        <ThemeProvider theme={categoryTheme}>
                            <IconDown
                                src={Images.IconDownImg}
                                alt="icon-down"
                            />
                        </ThemeProvider>
                    </span>
                </ModelCategoryButton>
            ))}
        </ModelCategories>
    );
};

export default Categories;
