/* eslint-disable no-unused-vars */
/* eslint-disable no-shadow */
import React, { useState, useEffect } from 'react';
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
import Loader from '../Loader';

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
        previews: [],
        model: '',
        otherFeatures: '',
        brand: '',
        price: 0,
    };
    const [state, setState] = useState(formState);
    const classes = useStyle();
    const {
        onSubmit,
        onCancel,
        onBrandChange,
        models,
        brands,
        getBrands,
        pending,
        isSuccess,
        message,
    } = props;
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
            const { images, previews } = state;
            const imageFile = event.target.files[0];
            const preview = await utils.base64Converter(imageFile);
            previews.push(preview);
            images.push(imageFile);
            setState({
                ...state,
                images,
                previews,
            });
        } else if (event.target.name === 'brand') {
            onBrandChange({ brands, value: event.target.value });
            setState({
                ...state,
                brand: event.target.value,
            });
        } else {
            setState({
                ...state,
                [event.target.name]: event.target.value,
            });
        }
    };
    const removeImage = (index) => {
        const { images, previews } = state;
        images.splice(index, 1);
        previews.splice(index, 1);
        setState({
            ...state,
            images,
            previews,
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
        previews,
        price,
        distanceTraveled,
    } = state;
    const onSubmitHandler = async () => {
        onSubmit({
            name,
            brand,
            model,
            year,
            fuelType,
            price,
            distanceTraveled,
            information: otherFeatures,
            images,
        });
    };
    useEffect(() => {
        getBrands();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
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
                                    <MenuItem key={brand.id} value={brand.name}>
                                        {brand.name}
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
                                    <MenuItem key={model.id} value={model.name}>
                                        {model.name}
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
                    <Span>Price (USD)</Span>
                    <Input
                        name="price"
                        type="number"
                        onChange={onChangeHandler}
                        min="1"
                        value={price}
                    />
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
                        placeholder="Feature1,Feature2,Feature3,..."
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
                    <Grid container spacing={3}>
                        {previews.map((image, index) => {
                            return (
                                <ImageCard
                                    xs={4}
                                    key={`key${image}`}
                                    index={index}
                                    imgSrc={image}
                                    removeImage={removeImage}
                                />
                            );
                        })}
                    </Grid>
                </Field>
                {message.length > 1 && (
                    <Span isValid={isSuccess}>{message}</Span>
                )}
                <Submit>
                    <Button onClick={onSubmitHandler} isSuccess>
                        Upload
                    </Button>
                    <Button onClick={onCancel} isSuccess={false}>
                        Cancel
                    </Button>
                </Submit>
            </Wrapper>
            {pending && <Loader type="FULL-PAGE" />}
        </ThemeProvider>
    );
};

Form.propTypes = {
    models: PropTypes.arrayOf(PropTypes.string),
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
    onBrandChange: PropTypes.func,
    brands: PropTypes.arrayOf(PropTypes.string),
    getBrands: PropTypes.func,
    pending: PropTypes.bool,
    isSuccess: PropTypes.bool,
    message: PropTypes.string,
};

Form.defaultProps = {
    models: ['Rx'],
    onSubmit: {},
    onCancel: {},
    brands: [],
    onBrandChange: {},
    getBrands: {},
    pending: false,
    isSuccess: false,
    message: '',
};

const mapStateToProps = (state) => ({ ...state.postReducer });
const mapDispatchToProps = (dispatch) => ({
    onBrandChange: (payload) => dispatch(action.loadModels(payload)),
    getBrands: () => dispatch(action.loadBrands()),
    getProfile: () => dispatch(action.loadProfile()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Form);
