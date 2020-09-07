/* eslint-disable no-shadow */
import React, { useState } from 'react';
import {
    Button,
    Field,
    Span,
    Input,
    ImageCard,
    Textarea,
} from 'components/common';
import PropTypes from 'prop-types';
import color from 'config/constants/Colors';
import { ThemeProvider } from 'styled-components';
import globalTheme from 'config/constants/Themes';
import action from 'redux/actions/Action.Post';
import utils from 'utils/utils';
import { connect } from 'react-redux';
import { Select, MenuItem, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import { Wrapper, Submit } from './Form.Styles';

const useStyle = makeStyles(() => ({
    dualLine: {
        display: 'flex',
        justifyContent: 'space-between',
    },
    selector: {
        margin: '0 7% 0 0',
        width: '44%',
        height: '40px',
    },
}));

const Form = (props) => {
    const formState = {
        name: '',
        year: '',
        fuelType: '',
        distanceTraveled: 0,
        images: [],
        model: '',
        otherFeatures: '',
        brand: '',
    };
    const [state, setState] = useState(formState);
    const classes = useStyle();
    const { onSubmit, onCancel, onBrandChange, models, brands } = props;
    const fuelTypes = ['Gasoline', 'Oil', 'Electricity'];
    const theme = {
        span: {
            margin: '11px 4px 0 0',
            width: '30%',
            color: color.black,
        },
        input: {
            ...globalTheme.input,
            inputWidth: '100%',
            fontColor: color.black,
            margin: '11px 0 0',
            height: '30px',
        },
        field: {
            width: '600px',
            margin: '16px 0 0',
        },
        imageCard: {
            width: '200px',
            height: '100px',
        },
    };
    const onChangeHandler = async (event) => {
        if (event.target.name === 'imageUrl') {
            const { images } = state;
            const image = await utils.base64Converter(event.target.files[0]);
            images.push(image);
            setState({
                ...state,
                images,
            });
        } else if (event.target.name === 'brand') {
            onBrandChange({ id: event.target.name, value: event.target.value });
        } else {
            setState({
                ...state,
                [event.target.name]: event.target.value,
            });
        }
    };
    const removeImage = (image) => {
        const { images } = state;
        images.pop(image);
        setState({
            ...state,
            images,
        });
    };
    const {
        name,
        brand,
        model,
        year,
        fuelType,
        otherFeatures,
        images,
        distanceTraveled,
    } = state;
    const onSubmitHandler = () => {
        onSubmit({
            name,
            brand,
            model,
            year,
            fuelType,
            distanceTraveled,
            otherFeatures,
            images,
        });
    };
    return (
        <ThemeProvider theme={theme}>
            <Wrapper>
                <Field>
                    <Grid container spacing={3}>
                        <Grid item xs={6} className={classes.dualLine}>
                            <Span>Brand</Span>
                            <Select
                                name="brand"
                                className={classes.selector}
                                onChange={onChangeHandler}
                                value={brand}
                            >
                                {brands.map((brand) => (
                                    <MenuItem
                                        key={`brand ${brand}`}
                                        value={brand}
                                    >
                                        {brand}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={6} className={classes.dualLine}>
                            <Span item xs={5}>
                                Model
                            </Span>
                            <Select
                                name="model"
                                className={classes.selector}
                                onChange={onChangeHandler}
                                value={model}
                            >
                                {models.map((model) => (
                                    <MenuItem
                                        key={`model ${model}`}
                                        value={model}
                                    >
                                        {model}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                </Field>
                <Field>
                    <Span>Name</Span>
                    <Input
                        name="name"
                        type="text"
                        onChange={onChangeHandler}
                        value={name}
                    />
                </Field>
                <Field>
                    <Grid container spacing={3}>
                        <Grid item xs={6} className={classes.dualLine}>
                            <Span>Year</Span>
                            <Select
                                name="year"
                                className={classes.selector}
                                onChange={onChangeHandler}
                                value={year}
                                defaultValue="2020"
                            >
                                {utils.getYears().map((year) => (
                                    <MenuItem key={`year ${year}`} value={year}>
                                        {year}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                        <Grid item xs={6} className={classes.dualLine}>
                            <Span item xs={5}>
                                Fuel Type
                            </Span>
                            <Select
                                name="fuelType"
                                className={classes.selector}
                                onChange={onChangeHandler}
                                value={fuelType}
                                defaultValue="Gasoline"
                            >
                                {fuelTypes.map((type) => (
                                    <MenuItem key={`type ${type}`} value={type}>
                                        {type}
                                    </MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    </Grid>
                </Field>
                <Field>
                    <Span>Distance Traveled (km)</Span>
                    <Input
                        name="distanceTraveled"
                        type="number"
                        onChange={onChangeHandler}
                        min="1"
                        value={distanceTraveled}
                    />
                </Field>
                <Field>
                    <Span>Other Information</Span>
                    <Textarea
                        name="otherFeatures"
                        rows="6"
                        cols="70"
                        onChange={onChangeHandler}
                        value={otherFeatures}
                        placeholder="Feature1: information1, Feature2: information2"
                    />
                </Field>
                <Field>
                    <Span>Upload Image</Span>
                    <Input
                        name="imageUrl"
                        type="file"
                        onChange={onChangeHandler}
                        accept="image/gif, image/jpeg, image/png"
                    />
                </Field>
                <Field>
                    <Span>Images</Span>
                    {images.map((image) => {
                        return (
                            <ImageCard
                                key={`key${image}`}
                                imgSrc={image}
                                removeImage={removeImage(image)}
                            />
                        );
                    })}
                </Field>
                <Submit>
                    <Button onClick={onSubmitHandler} isSuccess>
                        Upload
                    </Button>
                    <Button onClick={onCancel} isSuccess={false}>
                        Cancel
                    </Button>
                </Submit>
            </Wrapper>
        </ThemeProvider>
    );
};

Form.propTypes = {
    models: PropTypes.arrayOf(PropTypes.string),
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
    onBrandChange: PropTypes.func,
    brands: PropTypes.arrayOf(PropTypes.string),
};

Form.defaultProps = {
    models: [],
    onSubmit: {},
    onCancel: {},
    brands: [],
    onBrandChange: {},
};

const mapStateToProps = (state) => ({ ...state.postReducer });
const mapDispatchToProps = (dispatch) => ({
    onBrandChange: (payload) => dispatch(action.updateBranch(payload)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
