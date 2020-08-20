import React, { useState } from 'react';
import Images from 'config/constants/Images';
import { ModelCategories, ModelCategoryButton, IconDown } from './Categories';

const Categories = () => {
    const listCategories = [
        'HOME',
        'VEHICLEMANAGER',
        'AGENTS',
        'ELEMENTS',
        'OS',
        'FEATURE',
        'CONTACTS',
    ];
    const [categories] = useState(listCategories);
    return (
        <ModelCategories>
            {categories.map((category) => (
                <ModelCategoryButton type="button">
                    {category}
                    <span>
                        <IconDown src={Images.IconDownImg} alt="icon-down" />
                    </span>
                </ModelCategoryButton>
            ))}
        </ModelCategories>
    );
};

export default Categories;
