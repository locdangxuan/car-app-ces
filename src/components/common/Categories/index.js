import React, { useState } from 'react';
import IconDownImg from 'assets/images/icon-down.svg';
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
                        <IconDown src={IconDownImg} alt="icon-down" />
                    </span>
                </ModelCategoryButton>
            ))}
        </ModelCategories>
    );
};

export default Categories;
